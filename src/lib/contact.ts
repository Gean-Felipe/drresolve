import { createServerFn } from "@tanstack/react-start";

export type ContactFormData = {
  nome: string;
  retorno: string;
  descricao?: string;
};

export type ContactResponse = {
  success: boolean;
  error?: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br />");
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => {
    if (!data.nome || data.nome.trim().length < 2) {
      throw new Error("Por favor, informe seu nome.");
    }
    if (!data.retorno || data.retorno.trim().length < 6) {
      throw new Error("Por favor, informe um telefone válido para retorno.");
    }
    return {
      nome: data.nome.trim(),
      retorno: data.retorno.trim(),
      descricao: data.descricao?.trim() || "",
    };
  })
  .handler(async ({ data }): Promise<ContactResponse> => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Email Error] RESEND_API_KEY não definida no ambiente.");
      return {
        success: false,
        error: "Serviço de envio de e-mails em configuração.",
      };
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || "contato@advdrresolve.com.br";
    const fromEmail = process.env.CONTACT_EMAIL_FROM || "Dr. Resolve <contato@advdrresolve.com.br>";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <h2 style="color: #1e293b; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #5a6b5c;">Novo Contato pelo Site</h2>
        <div style="margin: 16px 0;">
          <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>Nome:</strong></p>
          <p style="margin: 0; font-size: 16px; color: #0f172a;">${escapeHtml(data.nome)}</p>
        </div>
        <div style="margin: 16px 0;">
          <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>Telefone para retorno:</strong></p>
          <p style="margin: 0; font-size: 16px; color: #0f172a;">${escapeHtml(data.retorno)}</p>
        </div>
        <div style="margin: 16px 0;">
          <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>Descrição:</strong></p>
          <div style="background-color: #f8fafc; padding: 12px; border-radius: 6px; border-left: 4px solid #5a6b5c; font-size: 15px; color: #334155;">
            ${escapeHtml(data.descricao || "Nenhum detalhe adicional informado.")}
          </div>
        </div>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 12px; color: #94a3b8; margin: 0;">Mensagem gerada pelo formulário institucional em advdrresolve.com.br</p>
      </div>
    `;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: `Novo Contato do Site: ${data.nome}`,
          html: htmlBody,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[Resend API Error]:", response.status, errorText);
        return {
          success: false,
          error: "Ocorreu uma falha no envio. Por favor, tente novamente ou use nosso WhatsApp.",
        };
      }

      return { success: true };
    } catch (err) {
      console.error("[Dispatch Error]:", err);
      return {
        success: false,
        error: "Erro inesperado ao processar o envio.",
      };
    }
  });
