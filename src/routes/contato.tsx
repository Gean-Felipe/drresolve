import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Page, PageIntro } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () => seo("Contato", "Solicite um contato inicial com o Dr. Resolve. Informe apenas seu nome, um canal de retorno e, se quiser, uma descrição breve."),
  component: Contato,
});

type Errors = Partial<Record<"nome" | "retorno", string>>;

function Contato() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "pending">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const retorno = String(f.get("retorno") || "").trim();
    const next: Errors = {};
    if (nome.length < 2) next.nome = "Informe seu nome.";
    if (retorno.length < 6) next.retorno = "Informe um telefone ou e-mail para retorno.";
    setErrors(next);
    if (Object.keys(next).length === 0) setStatus("pending");
  }

  const field = "mt-2 w-full border border-input bg-card px-4 py-3.5 text-base focus:border-coffee";

  return (
    <Page>
      <PageIntro index="06" label="Contato" title="Conte-nos, em poucas palavras, do que se trata." lead="Pedimos apenas o necessário para retornar o contato. Documentos e detalhes do caso serão tratados depois, por canal reservado." />
      <section className="container-ed grid gap-16 py-20 md:grid-cols-12 md:py-28">
        <form noValidate onSubmit={onSubmit} className="md:col-span-7" aria-describedby="aviso-form">
          <div className="space-y-8">
            <div>
              <label htmlFor="nome" className="text-sm font-medium">Nome</label>
              <input id="nome" name="nome" autoComplete="name" className={field} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "e-nome" : undefined} />
              {errors.nome && <p id="e-nome" className="mt-2 text-sm text-destructive">{errors.nome}</p>}
            </div>
            <div>
              <label htmlFor="retorno" className="text-sm font-medium">Telefone ou e-mail para retorno</label>
              <input id="retorno" name="retorno" className={field} aria-invalid={!!errors.retorno} aria-describedby={errors.retorno ? "e-retorno" : undefined} />
              {errors.retorno && <p id="e-retorno" className="mt-2 text-sm text-destructive">{errors.retorno}</p>}
            </div>
            <div>
              <label htmlFor="descricao" className="text-sm font-medium">Descrição breve <span className="font-normal text-muted-foreground">(opcional)</span></label>
              <textarea id="descricao" name="descricao" rows={4} maxLength={500} className={field} />
              <p className="mt-2 text-sm text-muted-foreground">Não inclua números de processo, senhas, dados bancários ou documentos.</p>
            </div>
          </div>
          <button type="submit" className="mt-10 min-h-12 bg-olive px-8 text-sm font-medium text-on-dark transition-colors hover:bg-coffee">
            Enviar solicitação
          </button>
          <div aria-live="polite">
            {status === "pending" && (
              <p className="mt-6 border-l-2 border-sand bg-card p-5 text-sm">
                Formulário demonstrativo: o canal de recebimento ainda não foi configurado, por isso <strong>nenhum dado foi enviado</strong>. O envio será ativado quando o escritório confirmar o destino oficial.
              </p>
            )}
          </div>
        </form>
        <aside className="space-y-10 md:col-span-4 md:col-start-9" id="aviso-form">
          <div className="border-t pt-6">
            <p className="eyebrow text-coffee">Importante</p>
            <p className="mt-3 text-sm text-muted-foreground">O envio da solicitação não estabelece relação advogado-cliente e não garante contratação ou resultado.</p>
          </div>
          <div className="border-t pt-6">
            <p className="eyebrow text-coffee">Canais institucionais</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: <span className="text-coffee">[a confirmar]</span></li>
              <li>E-mail: <span className="text-coffee">[a confirmar]</span></li>
              <li>Endereço e horário: <span className="text-coffee">[a confirmar]</span></li>
            </ul>
          </div>
        </aside>
      </section>
    </Page>
  );
}
