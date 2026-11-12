import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, type FormEvent } from "react";
import { Page, PageIntro } from "@/components/site/Layout";
import { seo } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { trackFormSubmission, trackWhatsAppClick } from "@/lib/analytics";
import { submitContactForm } from "@/lib/contact";

export const Route = createFileRoute("/contato")({
  head: () =>
    seo({
      title: "Fale com o Dr. Resolve | Contato e Atendimento Jurídico em MT",
      description:
        "Solicite um contato com a equipe Dr. Resolve. Atendimento especializado para produtores rurais e empresários em Cuiabá, Mato Grosso e todo o Brasil.",
      pathname: "/contato",
      schemas: [
        getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ]),
      ],
    }),
  component: Contato,
});

type Errors = Partial<Record<"nome" | "retorno", string>>;

function Contato() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const retorno = String(f.get("retorno") || "").trim();
    const descricao = String(f.get("descricao") || "").trim();

    const next: Errors = {};
    if (nome.length < 2) next.nome = "Informe seu nome.";
    if (retorno.length < 6) next.retorno = "Informe um telefone para retorno.";
    setErrors(next);

    if (Object.keys(next).length === 0) {
      trackFormSubmission("formulario_contato_principal");
      setStatus("submitting");
      setErrorMessage("");

      try {
        const res = await submitContactForm({
          data: { nome, retorno, descricao },
        });

        if (res.success) {
          setStatus("success");
          formRef.current?.reset();
        } else {
          setStatus("error");
          setErrorMessage(res.error || "Não foi possível enviar a mensagem no momento.");
        }
      } catch (err) {
        console.error("Erro ao enviar formulário:", err);
        setStatus("error");
        setErrorMessage("Falha de conexão. Por favor, tente novamente ou fale conosco pelo WhatsApp.");
      }
    }
  }

  const field =
    "mt-2 w-full rounded-sm border border-input bg-card px-4 py-3.5 text-base text-foreground transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/20";

  return (
    <Page>
      <PageIntro
        label="Contato"
        title="Conte-nos, em poucas palavras, do que se trata."
        lead="Pedimos apenas o necessário para retornar o contato com segurança. Documentos e detalhes sensíveis do caso serão tratados depois, por canal reservado."
      />
      <section className="container-ed grid gap-16 py-20 md:grid-cols-12 md:py-28">
        <form
          ref={formRef}
          noValidate
          onSubmit={onSubmit}
          className="md:col-span-7"
          aria-describedby="aviso-form"
        >
          <div className="space-y-8">
            <div>
              <label htmlFor="nome" className="text-sm font-medium text-foreground">
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                autoComplete="name"
                placeholder="Ex: João da Silva"
                className={field}
                aria-invalid={!!errors.nome}
                aria-describedby={errors.nome ? "e-nome" : undefined}
                disabled={status === "submitting"}
              />
              {errors.nome && (
                <p id="e-nome" className="mt-2 text-sm text-destructive">
                  {errors.nome}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="retorno" className="text-sm font-medium text-foreground">
                Telefone para retorno
              </label>
              <input
                id="retorno"
                name="retorno"
                type="tel"
                placeholder="Ex: (65) 99811-0101"
                className={field}
                aria-invalid={!!errors.retorno}
                aria-describedby={errors.retorno ? "e-retorno" : undefined}
                disabled={status === "submitting"}
              />
              {errors.retorno && (
                <p id="e-retorno" className="mt-2 text-sm text-destructive">
                  {errors.retorno}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="descricao" className="text-sm font-medium text-foreground">
                Descrição breve{" "}
                <span className="font-normal text-muted-foreground">(opcional)</span>
              </label>
              <textarea
                id="descricao"
                name="descricao"
                rows={4}
                maxLength={500}
                placeholder="Conte de forma resumida o contexto da sua dúvida ou necessidade..."
                className={field}
                disabled={status === "submitting"}
              />
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Por sigilo e segurança jurídica, não inclua números de processo, senhas, dados
                bancários ou documentos anexos.
              </p>
            </div>
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-10 min-h-12 rounded-sm bg-olive px-8 text-sm font-medium text-on-dark transition-all duration-200 hover:bg-coffee hover:shadow-md focus-visible:outline-2 focus-visible:outline-coffee cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Enviando solicitação..." : "Enviar solicitação"}
          </button>
          <div aria-live="polite">
            {status === "success" && (
              <div className="mt-6 border-l-4 border-olive bg-card p-5 text-sm rounded-r-sm shadow-xs">
                <p className="font-medium text-foreground text-olive">
                  Solicitação enviada com sucesso!
                </p>
                <p className="mt-1 text-muted-foreground">
                  Recebemos seus dados e entraremos em contato o mais breve possível para dar o devido andamento.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="mt-6 border-l-4 border-destructive bg-card p-5 text-sm rounded-r-sm shadow-xs">
                <p className="font-medium text-destructive">Não foi possível enviar</p>
                <p className="mt-1 text-muted-foreground">
                  {errorMessage || "Ocorreu um erro no processamento. Se preferir, fale conosco diretamente pelo WhatsApp."}
                </p>
              </div>
            )}
          </div>
        </form>
        <aside className="space-y-10 md:col-span-5 lg:col-span-4 lg:col-start-9" id="aviso-form">
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-coffee">Importante</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              O envio da solicitação não estabelece relação advogado-cliente e não garante
              contratação prévia ou resultado específico.
            </p>
          </div>

          {/* TELEFONE / WHATSAPP */}
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-coffee">TELEFONE / WHATSAPP</p>
            <div className="mt-3">
              <p className="text-base font-medium text-foreground">(65) 9811-0101</p>
              <a
                href="https://wa.me/556598110101"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("pagina_contato")}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-sand hover:text-coffee transition-colors"
              >
                <span>Conversar pelo WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* E-MAIL INSTITUCIONAL */}
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-coffee">E-MAIL INSTITUCIONAL</p>
            <div className="mt-3">
              <a
                href="mailto:contato@advdrresolve.com.br"
                className="text-base font-medium text-foreground hover:text-sand transition-colors"
              >
                contato@advdrresolve.com.br
              </a>
            </div>
          </div>

          {/* ENDEREÇO */}
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-coffee">ENDEREÇO</p>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <p className="text-foreground font-medium">Rua Washington, nº 318, Sala 04</p>
              <p>Jardim das Américas</p>
            </div>
          </div>
        </aside>
      </section>
    </Page>
  );
}
