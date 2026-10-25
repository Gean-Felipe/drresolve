import type { ReactNode } from "react";
import { Page, PageIntro, SectionHead, ClosingCta } from "./Layout";
import { Reveal } from "./Reveal";

export type Topic = { title: string; text: string };

export function TopicPage({
  index,
  label,
  title,
  lead,
  image,
  situationsTitle,
  situations,
  glossary,
  note,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  lead: string;
  image?: { src: string; alt: string; w: number; h: number; caption: string };
  situationsTitle: string;
  situations: Topic[];
  glossary?: Topic[];
  note: string;
  children?: ReactNode;
}) {
  return (
    <Page>
      <PageIntro index={index} label={label} title={title} lead={lead} />
      {image && (
        <figure className="container-ed -mt-px">
          <div className="img-frame">
            <img src={image.src} alt={image.alt} width={image.w} height={image.h} className="aspect-[21/9] w-full object-cover" />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground">{image.caption}</figcaption>
        </figure>
      )}
      <section className="container-ed py-24 md:py-32">
        <SectionHead index="i." label="Situações" title={situationsTitle} />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          {situations.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80} className="bg-background p-8 md:p-10">
              <span className="numeral text-xl">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      {glossary && (
        <section className="border-y bg-card">
          <div className="container-ed py-24 md:py-32">
            <SectionHead index="ii." label="Termos explicados" title="O que significam algumas palavras que aparecem nos processos." />
            <dl className="mt-14 grid gap-x-16 md:grid-cols-2">
              {glossary.map((g) => (
                <div key={g.title} className="border-t py-7">
                  <dt className="font-serif text-xl">{g.title}</dt>
                  <dd className="mt-2 text-muted-foreground">{g.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
      {children}
      <section className="container-ed py-20">
        <p className="mx-auto max-w-3xl border-l-2 border-sand pl-6 text-muted-foreground">{note}</p>
      </section>
      <ClosingCta />
    </Page>
  );
}
