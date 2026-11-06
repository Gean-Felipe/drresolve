import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, SectionHead, ClosingCta } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schemas";
import documentos from "@/assets/documentos.jpg";

export const Route = createFileRoute("/anjo-da-guarda")({
  head: () =>
    seo({
      title: "Projeto Anjo da Guarda | Assessoria Jurídica Preventiva Dr. Resolve",
      description:
        "Assessoria jurídica preventiva especializada para produtores rurais e empresários: diagnóstico de riscos, guarda patrimonial legal e suporte digital contínuo.",
      pathname: "/anjo-da-guarda",
      schemas: [
        getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Projeto Anjo da Guarda", path: "/anjo-da-guarda" },
        ]),
        getServiceSchema(
          "Projeto Anjo da Guarda",
          "Programa contínuo de auditoria de riscos, guarda patrimonial e assessoria jurídica estratégica para empresas e agro.",
          "/anjo-da-guarda",
        ),
      ],
    }),
  component: AnjoDaGuardaPage,
});

const pillars = [
  {
    num: "01",
    title: "Auditoria & Diagnóstico Preventivo",
    text: "Mapeamento aprofundado de contratos, garantias, CPRs, títulos de crédito e obrigações fiscais ou bancárias, identificando vulnerabilidades antes que evoluam para cobranças ou litígios.",
  },
  {
    num: "02",
    title: "Guarda Patrimonial Legal",
    text: "Salvaguarda técnica de imóveis, maquinários, lavouras e bens de produção, observando rigorosamente as proteções do bem de família, da pequena propriedade rural e os limites da legislação.",
  },
  {
    num: "03",
    title: "Suporte Digital Contínuo",
    text: "Canal reservado, ágil e direto de consulta para tirar dúvidas com o advogado responsável antes de firmar novos negócios, renegociações ou assumir garantias contratuais.",
  },
];

const audiences = [
  {
    title: "Produtores Rurais",
    desc: "Segurança para a terra, maquinários agrícolas, financiamentos e safras, prevenindo constrições judiciais e revisando contratos de crédito rural.",
  },
  {
    title: "Empresários e Gestores",
    desc: "Estruturação preventiva de contratos mercantis, governança corporativa, mitigação de passivos e defesa técnica frente a riscos bancários.",
  },
  {
    title: "Famílias e Empresas Familiares",
    desc: "Planejamento sucessório e patrimonial seguro, evitando disputas internas e preservando a continuidade do negócio para as próximas gerações.",
  },
];

const steps = [
  {
    step: "Etapa 1",
    title: "Entrevista e Diagnóstico Inicial",
    desc: "Reunião reservada para compreender o cenário atual, as atividades da empresa ou propriedade rural e as principais preocupações jurídicas.",
  },
  {
    step: "Etapa 2",
    title: "Auditoria e Mapeamento Documental",
    desc: "Exame minucioso de contratos, escrituras, garantias e eventuais pendências para mapear riscos potenciais com transparência.",
  },
  {
    step: "Etapa 3",
    title: "Plano de Blindagem e Prevenção Legal",
    desc: "Apresentação de medidas concretas e legalmente fundamentadas para proteger os ativos vitais da atividade econômica.",
  },
  {
    step: "Etapa 4",
    title: "Acompanhamento Contínuo",
    desc: "Consultoria permanente para respaldar decisões diárias, novos contratos e renegociações com segurança e agilidade.",
  },
];

function AnjoDaGuardaPage() {
  return (
    <Page>
      {/* Hero Editorial */}
      <section className="border-b border-line-dark/60 bg-olive pt-32 pb-16 text-on-dark md:pt-40 md:pb-24">
        <div className="container-ed">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 xl:gap-14">
            <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-7">
              <div className="mb-4">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-sans font-medium tracking-widest uppercase bg-sand/20 text-sand border border-sand/40">
                  Assessoria Preventiva & Contínua
                </span>
              </div>

              <h1 className="mb-6 text-left font-serif text-[clamp(2.1rem,3.8vw,3.6rem)] font-normal leading-[1.12] tracking-tight text-on-dark text-balance">
                Projeto Anjo da Guarda: antecipar riscos para{" "}
                <em className="text-sand">proteger o futuro.</em>
              </h1>

              <p className="w-full text-description text-on-dark-muted">
                Uma metodologia jurídica focada na prevenção de litígios e na salvaguarda legal do
                patrimônio de produtores rurais e empresários, antes que atos de constrição,
                execuções ou impasses financeiros aconteçam.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contato"
                  className="bg-sand text-graphite px-8 py-3.5 text-sm font-medium transition-all duration-200 hover:bg-white hover:shadow-lg"
                >
                  Solicitar adesão ao projeto
                </Link>
                <a
                  href="#pilares"
                  className="inline-flex items-center gap-2 border border-line-dark px-6 py-3.5 text-sm font-medium text-on-dark transition-all duration-200 hover:bg-white/10"
                >
                  Conhecer os 3 pilares
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center lg:col-span-5 lg:items-end xl:col-span-5">
              <figure className="w-full max-w-lg lg:max-w-none">
                <div className="img-frame overflow-hidden rounded-sm border border-line-dark/70 bg-graphite/40 p-1.5 shadow-2xl backdrop-blur-xs md:p-2">
                  <div className="overflow-hidden rounded-[1px]">
                    <img
                      src={documentos}
                      alt="Auditoria jurídica e documentos sobre a mesa"
                      width={1408}
                      height={1008}
                      loading="eager"
                      className="aspect-[4/3] max-h-[380px] lg:max-h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <figcaption className="mt-2.5 px-1 font-sans text-xs tracking-wide text-on-dark-muted/75">
                  Organização preventiva e análise técnica de documentos essenciais.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Os 3 Pilares */}
      <section id="pilares" className="container-ed scroll-mt-24 py-20 md:py-32">
        <SectionHead
          label="Estrutura de atuação"
          title="Os três pilares fundamentais do Anjo da Guarda."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 80}
              className="bg-card p-8 rounded-sm border border-border/70 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-sand/60"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-sand/20 flex items-center justify-center text-coffee font-serif text-lg font-bold mb-6">
                  {p.num}
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">{p.title}</h3>
                <p className="text-description text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Para quem é o projeto */}
      <section className="border-y border-border/70 bg-card/60 py-20 md:py-32">
        <div className="container-ed">
          <SectionHead
            label="Público atendido"
            title="Desenvolvido para quem sustenta a produção e o negócio."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 80}
                className="rounded-sm border border-border/80 bg-paper p-8 shadow-xs"
              >
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{a.title}</h3>
                <p className="text-description text-muted-foreground">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona a adesão (Etapas) */}
      <section className="container-ed py-20 md:py-32">
        <SectionHead label="Passo a passo" title="Como funciona a implantação do programa." />
        <ol className="mt-14 divide-y border-t border-border/70">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.step}
              delay={i * 70}
              className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
            >
              <span className="eyebrow text-sand md:col-span-3">{s.step}</span>
              <h3 className="font-serif text-xl md:text-2xl text-foreground md:col-span-4">
                {s.title}
              </h3>
              <p className="text-description text-muted-foreground md:col-span-5">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Nota Legal e Limitações Éticas */}
      <section className="container-ed py-14 md:py-16">
        <div className="mx-auto max-w-4xl rounded-r-sm border-l-2 border-sand bg-sand/10 p-6 shadow-xs md:p-8">
          <p className="text-description text-foreground/85 w-full">
            <strong>Transparência e conformidade:</strong> O Projeto Anjo da Guarda é uma atividade
            estritamente preventiva e consultiva, exercida nos termos do Estatuto da Advocacia e da
            OAB. Não oferecemos blindagens artificiais, ocultação patrimonial ou promessas de
            resultado judicial. Nossa atuação se baseia no rigor técnico, no diagnóstico de riscos e
            na proteção dos direitos legalmente assegurados.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCta />
    </Page>
  );
}
