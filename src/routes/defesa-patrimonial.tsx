import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/site/TopicPage";
import { seo } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schemas";

export const Route = createFileRoute("/defesa-patrimonial")({
  head: () =>
    seo({
      title: "Defesa Patrimonial e Proteção Jurídica de Bens | Dr. Resolve Advocacia",
      description:
        "Atuação jurídica em penhoras, leilões judiciais, avaliação de bens e defesa de imóveis, maquinários e pequenas propriedades rurais nos limites da lei.",
      pathname: "/defesa-patrimonial",
      schemas: [
        getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Defesa Patrimonial", path: "/defesa-patrimonial" },
        ]),
        getServiceSchema(
          "Defesa Patrimonial",
          "Análise técnica de constrições judiciais, penhoras e leilões de bens de produtores e empresas.",
          "/defesa-patrimonial",
        ),
      ],
    }),
  component: () => (
    <TopicPage
      label="Defesa patrimonial"
      title={
        <>
          Defender o patrimônio dentro do que a <em className="text-sand">lei</em> permite.
        </>
      }
      lead="Analisamos situações em que imóveis, maquinário ou outros bens estão sujeitos a penhora, avaliação ou leilão judicial, verificando se houve irregularidades e quais defesas são cabíveis."
      situationsTitle="Quando a análise patrimonial é necessária."
      situations={[
        {
          title: "Penhora de imóveis",
          text: "Verificação da regularidade da penhora e de eventuais proteções legais, como as aplicáveis ao bem de família ou à pequena propriedade rural.",
        },
        {
          title: "Avaliação de bens",
          text: "Exame da avaliação feita no processo, que influencia diretamente o valor de um eventual leilão.",
        },
        {
          title: "Leilões judiciais",
          text: "Análise dos atos que antecedem o leilão e das medidas processuais possíveis em cada etapa.",
        },
        {
          title: "Maquinário e bens produtivos",
          text: "Avaliação de constrições sobre equipamentos essenciais à atividade e das defesas previstas em lei.",
        },
      ]}
      note="Não existe proteção absoluta do patrimônio. Nossa atuação não envolve ocultação de bens nem garante a suspensão de leilões: consiste em verificar, com rigor técnico, se os direitos do devedor foram respeitados."
    />
  ),
});
