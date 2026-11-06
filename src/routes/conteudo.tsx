import { createFileRoute } from "@tanstack/react-router";
import { Page, PageIntro, ClosingCta } from "@/components/site/Layout";
import { ArtigosEditorial } from "@/components/site/ArtigosEditorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/conteudo")({
  head: () =>
    seo(
      "Conteúdo Jurídico",
      "Publicações informativas dedicadas a esclarecer dúvidas frequentes sobre crédito rural, contratos empresariais, execuções e segurança patrimonial.",
    ),
  component: ConteudoPage,
});

function ConteudoPage() {
  return (
    <Page>
      <PageIntro
        label="Conteúdo jurídico"
        title={
          <>
            Orientações e temas frequentes para a{" "}
            <em className="text-sand">atividade produtiva.</em>
          </>
        }
        lead="Publicações informativas dedicadas a esclarecer dúvidas frequentes sobre crédito rural, contratos empresariais, execuções e segurança patrimonial."
      />
      <section className="container-ed py-16 md:py-24">
        <ArtigosEditorial />
      </section>
      <ClosingCta />
    </Page>
  );
}
