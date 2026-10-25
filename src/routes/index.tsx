import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, SectionHead, ClosingCta } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";
import hero from "@/assets/hero-campo.jpg";
import empresarial from "@/assets/empresarial.jpg";
import documentos from "@/assets/documentos.jpg";

export const Route = createFileRoute("/")({
  head: () => seo("Estratégia jurídica para o patrimônio e a atividade produtiva", "Advocacia e consultoria estratégica para produtores rurais, empresários e gestores, com análise técnica e franca de cada demanda."),
  component: Index,
});

const areas = [
  { n: "01", to: "/advocacia-empresarial", title: "Advocacia empresarial", text: "Contratos, passivos, execuções fiscais, demandas trabalhistas e relações bancárias de pequenas e médias empresas.", tags: ["Contratos", "Execuções fiscais", "Relações bancárias"] },
  { n: "02", to: "/direito-rural", title: "Direito rural e crédito rural", text: "Questões envolvendo contratos rurais, financiamentos, cédulas de crédito e execuções ligadas à atividade agrícola.", tags: ["Crédito rural", "Contratos rurais", "Execuções"] },
  { n: "03", to: "/defesa-patrimonial", title: "Defesa patrimonial", text: "Análise de situações envolvendo imóveis, maquinário e atos de constrição judicial, dentro dos limites da lei.", tags: ["Imóveis", "Penhora", "Leilões judiciais"] },
  { n: "04", to: "/contato", title: "Recuperação de crédito", text: "Avaliação de valores a receber e dos caminhos jurídicos possíveis para sua cobrança. Escopo a confirmar.", tags: ["A confirmar"] },
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
      {/* Abertura */}
      <section className="relative min-h-[100svh] overflow-hidden bg-olive text-on-dark">
        <img src={hero} alt="Estrada de terra entre lavouras ao entardecer" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover opacity-55" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive via-olive/40 to-olive/70" aria-hidden />
        <div className="container-ed relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-9">
              <p className="eyebrow text-sand">Advocacia e consultoria estratégica</p>
              <h1 className="display mt-6">
                Estratégia jurídica para o patrimônio e a <em className="text-sand">atividade produtiva.</em>
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-8 md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10">
              <p className="text-on-dark-muted">
                Atuamos com produtores rurais e empresários em questões de crédito, contratos, execuções e patrimônio — começando sempre pela análise dos fatos e dos documentos.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a href="#atuacao" className="bg-sand px-6 py-3.5 text-sm font-medium text-graphite transition-colors hover:bg-paper">Conhecer a atuação</a>
                <Link to="/contato" className="link-line text-sm text-on-dark">Falar com o escritório</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="container-ed py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="eyebrow text-muted-foreground"><span className="numeral mr-3 text-base normal-case tracking-normal">i.</span>Como trabalhamos</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={80}>
            <p className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.25] text-coffee">
              Antes de qualquer definição, buscamos compreender os fatos, examinar os documentos e avaliar a viabilidade jurídica da demanda.
            </p>
            <p className="prose-ed mt-10 text-muted-foreground">
              Nem toda situação comporta a mesma resposta — e algumas não comportam medida judicial. Por isso, cada atendimento começa por uma entrevista detalhada e pela leitura técnica do caso. Só então explicamos, com franqueza, quais caminhos existem, quais riscos envolvem e se faz sentido prosseguir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Públicos */}
      <section className="border-y bg-card">
        <div className="container-ed grid md:grid-cols-2">
          {[
            { img: hero, alt: "", who: "Produtores rurais", text: "Crédito rural, contratos, execuções e questões que envolvem a terra, o maquinário e a continuidade da produção.", to: "/direito-rural" as const },
            { img: empresarial, alt: "", who: "Empresários e gestores", text: "Contratos, passivos, execuções fiscais e relações bancárias, com leitura dos riscos para o negócio.", to: "/advocacia-empresarial" as const },
          ].map((p, i) => (
            <Reveal key={p.who} delay={i * 100} className={`py-16 md:py-20 ${i === 0 ? "md:border-r md:pr-14" : "border-t md:border-t-0 md:pl-14"}`}>
              <p className="eyebrow text-muted-foreground">Para quem</p>
              <h2 className="mt-4 text-4xl">{p.who}</h2>
              <p className="mt-5 max-w-md text-muted-foreground">{p.text}</p>
              <Link to={p.to} className="group mt-8 inline-flex items-center gap-3 border-b border-sand pb-1 text-sm">
                Ver a atuação <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Áreas */}
      <section id="atuacao" className="container-ed scroll-mt-24 py-24 md:py-36">
        <SectionHead index="ii." label="Áreas de atuação" title="Frentes de trabalho definidas, com escopo claro." />
        <ul className="mt-16 border-t">
          {areas.map((a, i) => (
            <Reveal as="li" key={a.n} delay={i * 60} className="border-b">
              <Link to={a.to} className="group grid gap-4 py-10 transition-colors hover:bg-card md:grid-cols-12 md:items-baseline md:px-4">
                <span className="numeral text-2xl md:col-span-1">{a.n}</span>
                <h3 className="text-3xl md:col-span-4">{a.title}</h3>
                <div className="md:col-span-6">
                  <p className="text-muted-foreground">{a.text}</p>
                  <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 eyebrow text-coffee">
                    {a.tags.map((t) => <span key={t}>{t}</span>)}
                  </p>
                </div>
                <span aria-hidden className="text-xl text-sand transition-transform group-hover:translate-x-1 md:col-span-1 md:text-right">→</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Metodologia */}
      <section className="bg-olive text-on-dark">
        <div className="container-ed grid gap-16 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-5">
            <p className="eyebrow text-sand"><span className="numeral mr-3 text-base normal-case tracking-normal">iii.</span>Metodologia</p>
            <h2 className="h-section mt-6">Um processo transparente, do primeiro contato à decisão.</h2>
            <div className="img-frame mt-12 hidden md:block">
              <img src={documentos} alt="Pastas e documentos organizados sobre uma mesa de madeira" width={1408} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <ol className="md:col-span-6 md:col-start-7">
            {steps.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 70} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line-dark py-7 first:border-t">
                <span className="numeral text-xl">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{s}</span>
              </Reveal>
            ))}
            <p className="mt-8 text-sm text-on-dark-muted">O contato inicial não representa garantia de contratação ou de resultado.</p>
            <Link to="/metodologia" className="mt-8 inline-flex items-center gap-3 border-b border-sand pb-1 text-sm">Entender cada etapa →</Link>
          </ol>
        </div>
      </section>

      {/* Institucional */}
      <section className="container-ed py-24 md:py-36">
        <SectionHead index="iv." label="O escritório" title="Dr. Resolve — Advocacia e Consultoria Estratégica." />
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5 md:col-start-4">
            <p className="text-muted-foreground">
              Um escritório dedicado a questões que afetam a atividade produtiva e o patrimônio de quem trabalha no campo e na empresa. A atuação combina análise técnica, linguagem acessível e honestidade sobre as possibilidades de cada caso.
            </p>
          </Reveal>
          <Reveal className="border-l border-sand pl-6 md:col-span-3" delay={100}>
            <p className="eyebrow text-coffee">Equipe responsável</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Nomes, inscrições na OAB e trajetória profissional serão publicados após validação pelo escritório.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="border-t bg-card">
        <div className="container-ed py-24 md:py-32">
          <SectionHead index="v." label="Conteúdo jurídico" title="Análises informativas, em preparação." />
          <ul className="mt-14 grid gap-px bg-border md:grid-cols-4">
            {["Crédito rural", "Contratos empresariais", "Execuções e constrição patrimonial", "Prevenção e organização documental"].map((t) => (
              <li key={t} className="bg-card p-8">
                <p className="eyebrow text-sand">Tema</p>
                <p className="mt-4 font-serif text-2xl leading-tight">{t}</p>
                <p className="mt-6 text-sm text-muted-foreground">Em breve</p>
              </li>
            ))}
          </ul>
          <Link to="/conteudo" className="mt-10 inline-flex items-center gap-3 border-b border-sand pb-1 text-sm">Ver a área de conteúdo →</Link>
        </div>
      </section>

      <ClosingCta />
    </Page>
  );
}
