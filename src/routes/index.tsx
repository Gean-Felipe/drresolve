import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, SectionHead, ClosingCta } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";
import { getLegalServiceSchema, getWebSiteSchema } from "@/lib/schemas";
import hero from "@/assets/hero-campo.jpg";
import ruralSilos from "@/assets/rural-silos.jpg";
import empresarial from "@/assets/empresarial.png";
import documentos from "@/assets/documentos.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Dr. Resolve | Advocacia e Consultoria Estratégica em MT",
      description:
        "Advocacia estratégica especializada em Direito Rural, Crédito Rural, Defesa Patrimonial e Advocacia Empresarial. Atuação em Mato Grosso e todo o Brasil.",
      pathname: "/",
      schemas: [getLegalServiceSchema(), getWebSiteSchema()],
    }),
  component: Index,
});

const areas = [
  {
    to: "/advocacia-empresarial" as const,
    title: "Advocacia empresarial",
    text: "Contratos, passivos, execuções fiscais, demandas trabalhistas e relações bancárias de pequenas e médias empresas.",
    tags: ["Contratos", "Execuções fiscais", "Relações bancárias"],
  },
  {
    to: "/direito-rural" as const,
    title: "Direito rural e crédito rural",
    text: "Questões envolvendo contratos rurais, financiamentos, cédulas de crédito e execuções ligadas à atividade agrícola.",
    tags: ["Crédito rural", "Contratos rurais", "Alongamento"],
  },
  {
    to: "/defesa-patrimonial" as const,
    title: "Defesa patrimonial",
    text: "Análise de situações envolvendo imóveis, maquinário e atos de constrição judicial, dentro dos limites da lei.",
    tags: ["Imóveis", "Penhora", "Leilões judiciais"],
  },
  {
    to: "/contato" as const,
    title: "Recuperação de crédito",
    text: "Avaliação de valores a receber e dos caminhos jurídicos possíveis para sua cobrança com critérios seguros.",
    tags: ["Cobrança", "Títulos", "Execução"],
  },
] as const;

const steps = [
  "Recebimento da solicitação de contato.",
  "Organização inicial das informações e documentos pertinentes.",
  "Entrevista e avaliação minuciosa por advogado responsável.",
  "Explicação sobre viabilidade, riscos e caminhos jurídicos possíveis.",
  "Definição de escopo e eventual contratação, quando houver fundamento.",
];

function Index() {
  return (
    <Page overlay>
      {/* Banner Topo — Abertura */}
      <section className="relative min-h-[100svh] overflow-hidden bg-olive text-on-dark flex flex-col justify-end">
        <img
          src={hero}
          alt="Estrada de terra entre lavouras ao entardecer"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity duration-1000"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-olive via-olive/50 to-olive/75"
          aria-hidden
        />
        <div className="container-ed relative z-10 flex flex-col justify-end pb-16 pt-36 md:pb-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7 lg:col-span-8">
              <p className="eyebrow text-sand tracking-widest">
                Advocacia e consultoria estratégica
              </p>
              <h1 className="display mt-6 leading-[1.04]">
                Estratégia jurídica para o patrimônio e a{" "}
                <em className="text-sand italic">atividade produtiva.</em>
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-8 md:col-span-5 lg:col-span-4">
              <p className="text-on-dark-muted leading-relaxed text-justify [text-justify:inter-word]">
                Atuamos com produtores rurais e empresários em questões de crédito, contratos,
                execuções e patrimônio — começando sempre pela análise criteriosa dos fatos e
                documentos.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#Quem somos nós?"
                  className="bg-sand px-6 py-3.5 text-sm font-medium text-graphite transition-all duration-200 hover:bg-paper hover:shadow-md"
                >
                  Conhecer o escritório
                </a>
                <Link
                  to="/contato"
                  className="link-line text-sm text-on-dark transition-colors hover:text-sand"
                >
                  Falar com o escritório
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão Quem somos nós? — Posicionada logo abaixo do banner topo e acima de 'Como trabalhamos' */}
      <section
        id="Quem somos nós?"
        className="scroll-mt-20 container-ed py-24 md:py-36 border-b border-border/60"
      >
        <h2 className="h-section">
          Prática jurídica estratégica, guiada pelo rigor técnico e pela franqueza.
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-7 lg:col-span-7">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground text-justify [text-justify:inter-word]">
              <p>
                O{" "}
                <strong className="font-medium text-foreground">
                  Dr. Resolve — Advocacia e Consultoria Estratégica
                </strong>{" "}
                atua com foco exclusivo nas demandas que impactam a atividade produtiva, o
                patrimônio e a sustentabilidade de quem trabalha no campo e na empresa.
              </p>
              <p>
                Compreendemos a dinâmica real dos negócios: sabemos que litígios, execuções e
                constrições patrimoniais não surgem por acaso, mas como consequência de riscos não
                mapeados em contratos, financiamentos e relações bancárias. Por isso, nossa atuação
                combina diagnóstico preventivo minucioso e defesa contenciosa firme, sempre dentro
                dos limites estritos da legalidade.
              </p>
              <p>
                Trabalhamos com linguagem acessível e franqueza técnica: avaliamos a viabilidade
                jurídica antes de qualquer contratação, expondo com clareza os riscos, os prazos e
                os caminhos possíveis para cada cliente.
              </p>
            </div>
          </Reveal>

          <Reveal
            className="border-l-2 border-sand pl-6 md:col-span-5 lg:col-span-4 lg:col-start-9"
            delay={100}
          >
            <p className="eyebrow text-coffee">Diretrizes de Atuação</p>
            <div className="mt-5 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <div>
                <p className="font-medium text-foreground font-serif text-lg">
                  Diagnóstico Documental
                </p>
                <p className="mt-1 text-justify [text-justify:inter-word]">
                  Nenhuma orientação é formulada sem o exame aprofundado dos contratos, certidões e
                  autos processuais pertinentes.
                </p>
              </div>
              <div className="border-t border-border/70 pt-4">
                <p className="font-medium text-foreground font-serif text-lg">Segurança & Sigilo</p>
                <p className="mt-1 text-justify [text-justify:inter-word]">
                  Tratamento reservado de informações sensíveis, preservando a estratégia e os
                  interesses corporativos do cliente.
                </p>
              </div>
              <div className="border-t border-border/70 pt-4">
                <p className="font-medium text-foreground font-serif text-lg">
                  Transparência Ética
                </p>
                <p className="mt-1 text-justify [text-justify:inter-word]">
                  Conduta pautada pelas normas da OAB, sem promessas ilusórias de resultado ou
                  blindagens artificiais.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="container-ed py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4 lg:col-span-3">
            <p className="eyebrow text-muted-foreground">Como trabalhamos</p>
          </Reveal>
          <Reveal className="md:col-span-8 lg:col-span-9" delay={80}>
            <p className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.25] text-coffee text-justify [text-justify:inter-word] w-full">
              Antes de qualquer definição, buscamos compreender os fatos, examinar os documentos e
              avaliar a viabilidade jurídica da demanda.
            </p>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground text-justify [text-justify:inter-word]">
              Não oferecemos fórmulas prontas ou promessas irreais. Nosso compromisso é entregar uma
              leitura técnica, fundamentada e honesta sobre os riscos, custos e caminhos adequados
              para cada cliente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Públicos */}
      <section className="border-t bg-card/40">
        <div className="container-ed grid md:grid-cols-2">
          {[
            {
              img: ruralSilos,
              alt: "Silos de grãos e maquinário agrícola",
              who: "Produtores rurais",
              text: "Financiamentos, contratos agrários, garantias e atos de constrição ligados à atividade no campo.",
              to: "/conteudo" as const,
            },
            {
              img: empresarial,
              alt: "Ambiente empresarial corporativo",
              who: "Empresários e gestores",
              text: "Contratos, passivos, execuções fiscais e relações bancárias, com leitura dos riscos para a sustentabilidade do negócio.",
              to: "/advocacia-empresarial" as const,
            },
          ].map((p, i) => (
            <Reveal
              key={p.who}
              delay={i * 100}
              className={`py-16 md:py-24 flex flex-col justify-between ${
                i === 0 ? "md:border-r md:pr-14" : "border-t md:border-t-0 md:pl-14"
              }`}
            >
              <div>
                <div className="img-frame aspect-[16/10] overflow-hidden rounded-sm mb-8 border border-border/50 shadow-sm bg-muted">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="eyebrow text-muted-foreground">Para quem</p>
                <h2 className="mt-3 text-3xl md:text-4xl">{p.who}</h2>
                <p className="mt-4 w-full text-base leading-relaxed text-muted-foreground text-justify [text-justify:inter-word]">
                  {p.text}
                </p>
              </div>
              <div>
                <Link
                  to={p.to}
                  className="group mt-8 inline-flex items-center gap-3 border-b border-sand pb-1 text-sm font-medium transition-all duration-200 hover:border-graphite"
                >
                  <span>Ver a atuação especializada</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1 text-coffee"
                  >
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="atuacao" className="container-ed scroll-mt-24 py-24 md:py-36">
        <SectionHead
          label="Áreas de atuação"
          title="Frentes de trabalho definidas, com escopo claro."
        />
        <ul className="mt-16 border-t divide-y">
          {areas.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 60}>
              <Link
                to={a.to}
                className="group grid gap-4 py-10 transition-all duration-300 hover:bg-card/80 hover:px-6 rounded-sm md:grid-cols-12 md:items-baseline"
              >
                <h3 className="text-2xl md:text-3xl md:col-span-5 transition-colors group-hover:text-coffee">
                  {a.title}
                </h3>
                <div className="md:col-span-6">
                  <p className="text-muted-foreground leading-relaxed">{a.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-sans font-medium tracking-wide bg-sand/15 text-coffee border border-sand/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="text-xl text-sand transition-transform duration-300 group-hover:translate-x-2 md:text-right"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Projeto Anjo da Guarda */}
      <section id="anjo-da-guarda" className="border-t bg-card/70 py-24 md:py-36 scroll-mt-20">
        <div className="container-ed">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-sans font-medium tracking-widest uppercase bg-sand/20 text-coffee border border-sand/40 mb-4">
              Acompanhamento Preventivo & Contínuo
            </span>
            <h2 className="h-section text-center">Projeto Anjo da Guarda</h2>
            <p className="mt-6 text-description text-muted-foreground w-full">
              Uma assessoria jurídica preventiva desenvolvida para resguardar o patrimônio e a
              atividade produtiva de produtores rurais e empresários, antecipando riscos e blindando
              decisões antes que litígios, execuções ou constrições judiciais aconteçam.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Reveal
              delay={0}
              className="bg-paper p-8 rounded-sm border border-border/70 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-sand/60"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-sand/25 flex items-center justify-center text-coffee font-serif text-lg font-bold mb-5">
                  01
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 text-center md:text-left">
                  Auditoria & Diagnóstico
                </h3>
                <p className="text-description text-muted-foreground text-sm leading-relaxed">
                  Mapeamento minucioso de contratos, garantias, títulos de crédito e obrigações
                  fiscais ou bancárias, identificando vulnerabilidades antes que se tornem cobranças
                  judiciais.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={80}
              className="bg-paper p-8 rounded-sm border border-border/70 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-sand/60"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-sand/25 flex items-center justify-center text-coffee font-serif text-lg font-bold mb-5">
                  02
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 text-center md:text-left">
                  Guarda Patrimonial Legal
                </h3>
                <p className="text-description text-muted-foreground text-sm leading-relaxed">
                  Defesa técnica e proteção antecipada de imóveis, maquinários, colheitas e bens
                  produtivos, operando estritamente dentro dos parâmetros da lei.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={160}
              className="bg-paper p-8 rounded-sm border border-border/70 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-sand/60"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-sand/25 flex items-center justify-center text-coffee font-serif text-lg font-bold mb-5">
                  03
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 text-center md:text-left">
                  Suporte Digital Contínuo
                </h3>
                <p className="text-description text-muted-foreground text-sm leading-relaxed">
                  Canal reservado e ágil de consulta para que você e sua equipe esclareçam dúvidas
                  jurídicas antes de assinar contratos ou assumir novos passivos.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
            <Link
              to="/anjo-da-guarda"
              className="bg-coffee px-8 py-4 text-sm font-medium text-paper transition-all duration-200 hover:bg-olive hover:shadow-md"
            >
              Conhecer a página do projeto
            </Link>
            <Link
              to="/contato"
              className="border border-border/80 px-8 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:border-sand hover:bg-sand/10"
            >
              Solicitar adesão
            </Link>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="scroll-mt-20 bg-olive text-on-dark">
        <div className="container-ed grid gap-16 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-5">
            <p className="eyebrow text-sand">Metodologia</p>
            <h2 className="h-section mt-6">
              Um processo transparente, do primeiro contato à decisão.
            </h2>
            <div className="img-frame mt-10 hidden overflow-hidden rounded-sm border border-line-dark shadow-xl md:block">
              <img
                src={documentos}
                alt="Pastas e documentos organizados sobre uma mesa de madeira"
                width={1408}
                height={1008}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <ol className="md:col-span-6 md:col-start-7">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={i * 70}
                className="border-b border-line-dark py-7 first:border-t"
              >
                <span className="text-lg leading-relaxed">{s}</span>
              </Reveal>
            ))}
            <p className="mt-8 text-sm text-on-dark-muted">
              O contato inicial não representa garantia de contratação ou de resultado.
            </p>
            <div className="mt-8">
              <Link
                to="/metodologia"
                className="inline-flex items-center gap-3 border-b border-sand pb-1 text-sm font-medium transition-all hover:border-white hover:text-sand"
              >
                <span>Entender cada etapa na página de metodologia</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </ol>
        </div>
      </section>

      <ClosingCta />
    </Page>
  );
}
