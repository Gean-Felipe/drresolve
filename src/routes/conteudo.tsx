import { createFileRoute } from "@tanstack/react-router";
import { Page, PageIntro, ClosingCta } from "@/components/site/Layout";
import { ArtigosEditorial } from "@/components/site/ArtigosEditorial";
import { seo } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const Route = createFileRoute("/conteudo")({
  head: () =>
    seo({
      title: "Artigos e Conteúdo Jurídico | Dr. Resolve Advocacia",
      description:
        "Publicações jurídicas informativas: orientações sobre crédito rural, execuções, contratos empresariais e segurança patrimonial para empresas e agronegócio.",
      pathname: "/conteudo",
      schemas: [
        getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Conteúdo Jurídico", path: "/conteudo" },
        ]),
      ],
    }),
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
