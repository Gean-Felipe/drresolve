import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const nav = [
  { to: "/advocacia-empresarial", label: "Empresarial" },
  { to: "/direito-rural", label: "Rural" },
  { to: "/defesa-patrimonial", label: "Patrimonial" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/conteudo", label: "Conteúdo" },
] as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-[1.45rem] leading-none tracking-tight ${className}`}>
      Dr. Resolve
      <span className="ml-2 hidden align-middle font-sans text-[0.62rem] uppercase tracking-[0.18em] opacity-70 sm:inline">
        Advocacia e Consultoria
      </span>
    </span>
  );
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = !overlay || scrolled || open;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-line-dark bg-olive text-on-dark" : "bg-transparent text-on-dark"
      }`}
    >
      <div className="container-ed flex h-18 items-center justify-between py-4">
        <Link to="/" aria-label="Dr. Resolve — página inicial">
          <Wordmark />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-line text-sm text-on-dark-muted transition-colors hover:text-on-dark"
              activeProps={{ className: "text-on-dark" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="border border-sand px-5 py-2.5 text-sm text-on-dark transition-colors hover:bg-sand hover:text-graphite"
          >
            Contato
          </Link>
        </nav>
        <button
          type="button"
          className="min-h-11 px-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="container-ed border-t border-line-dark pb-8 lg:hidden">
          <ul className="flex flex-col">
            {[...nav, { to: "/contato", label: "Contato" } as const].map((n) => (
              <li key={n.to} className="border-b border-line-dark">
                <Link to={n.to} onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-graphite text-on-dark">
      <div className="container-ed grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-6 max-w-sm text-sm text-on-dark-muted">
            Advocacia e consultoria estratégica para produtores rurais, empresários e gestores.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-sand">Atuação</p>
          <ul className="mt-5 space-y-3 text-sm text-on-dark-muted">
            <li><Link to="/advocacia-empresarial" className="link-line hover:text-on-dark">Advocacia empresarial</Link></li>
            <li><Link to="/direito-rural" className="link-line hover:text-on-dark">Direito rural e crédito rural</Link></li>
            <li><Link to="/defesa-patrimonial" className="link-line hover:text-on-dark">Defesa patrimonial</Link></li>
            <li><Link to="/metodologia" className="link-line hover:text-on-dark">Metodologia</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-sand">Informações institucionais</p>
          <ul className="mt-5 space-y-3 text-sm text-on-dark-muted">
            <li>Inscrição OAB: <span className="text-sand">[a confirmar]</span></li>
            <li>Endereço: <span className="text-sand">[a confirmar]</span></li>
            <li><Link to="/contato" className="link-line hover:text-on-dark">Solicitar contato</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line-dark">
        <p className="container-ed py-6 text-xs leading-relaxed text-on-dark-muted">
          Conteúdo de caráter exclusivamente informativo, que não substitui a análise individualizada de cada caso.
          O contato pelo site não estabelece relação advogado-cliente. Nenhum resultado é garantido.
        </p>
      </div>
    </footer>
  );
}

export function Page({ children, overlay = false }: { children: ReactNode; overlay?: boolean }) {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <Header overlay={overlay} />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}

export function PageIntro({
  index,
  label,
  title,
  lead,
}: {
  index: string;
  label: string;
  title: ReactNode;
  lead: string;
}) {
  return (
    <section className="bg-olive pt-36 pb-20 text-on-dark md:pt-44 md:pb-28">
      <div className="container-ed grid gap-10 md:grid-cols-12">
        <div className="md:col-span-2">
          <span className="numeral text-3xl">{index}</span>
        </div>
        <div className="md:col-span-9">
          <p className="eyebrow text-sand">{label}</p>
          <h1 className="mt-6 text-[clamp(2.4rem,5vw,4.4rem)]">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg text-on-dark-muted">{lead}</p>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ index, label, title }: { index: string; label: string; title: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-3">
        <p className="eyebrow text-muted-foreground">
          <span className="numeral mr-3 text-base normal-case tracking-normal">{index}</span>
          {label}
        </p>
      </div>
      <h2 className="h-section md:col-span-8">{title}</h2>
    </div>
  );
}

export function ClosingCta() {
  return (
    <section className="bg-coffee text-on-dark">
      <div className="container-ed grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <h2 className="h-section md:col-span-7">
          Cada situação tem fatos, documentos e riscos próprios. A análise começa por eles.
        </h2>
        <div className="flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9">
          <p className="text-on-dark-muted">
            O contato inicial serve para entender a demanda. Ele não representa garantia de contratação ou de resultado.
          </p>
          <Link
            to="/contato"
            className="group inline-flex w-fit items-center gap-3 border-b border-sand pb-1 text-on-dark"
          >
            Solicitar uma análise inicial
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
