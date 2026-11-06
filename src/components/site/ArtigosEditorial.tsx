import { useState } from "react";
import {
  cardsConteudo,
  categorias,
  filtrarCards,
  type ArtigoCard,
  type Categoria,
} from "@/lib/artigos";

function CardArtigo({ card }: { card: ArtigoCard }) {
  const tituloId = `artigo-${card.id}`;

  return (
    <article
      aria-labelledby={tituloId}
      className="group relative flex flex-col justify-between rounded-sm border border-border/80 bg-card p-7 md:p-8 shadow-xs transition-all duration-300 hover:border-sand/80 hover:shadow-md hover:-translate-y-0.5"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground/90">
            {card.categoria}
          </span>
          {card.emPreparacao && (
            <span className="inline-flex items-center rounded-full border border-sand/40 bg-sand/20 px-2 py-0.5 text-[0.68rem] font-sans font-medium tracking-wide text-coffee">
              Em preparação
            </span>
          )}
        </div>

        <h3
          id={tituloId}
          className="mt-2.5 font-serif text-xl font-normal leading-snug text-foreground md:text-[1.38rem]"
        >
          {card.titulo}
        </h3>

        {/* Linha divisória sutil idêntica à referência visual */}
        <div
          className="my-3.5 h-px w-10 bg-border/80 transition-colors group-hover:bg-sand"
          aria-hidden
        />

        <p className="text-sm leading-relaxed text-muted-foreground text-justify [text-justify:inter-word] line-clamp-4">
          {card.texto}
        </p>
      </div>
    </article>
  );
}

export function ArtigosEditorial({ itens = cardsConteudo }: { itens?: ArtigoCard[] }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>("Todos");
  const artigosFiltrados = filtrarCards(categoriaAtiva, itens);

  return (
    <div>
      {/* Barra de Filtros por Categoria Fiel à Imagem de Referência */}
      <div
        role="group"
        aria-label="Filtrar por categoria"
        className="flex flex-wrap items-center gap-2 border-b border-border/70 pb-6"
      >
        {categorias.map((cat) => {
          const isActive = categoriaAtiva === cat;

          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => setCategoriaAtiva(cat)}
              className={`min-h-11 rounded-none px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-olive text-on-dark border border-olive shadow-xs font-semibold"
                  : "bg-card text-foreground border border-border/80 hover:border-sand hover:bg-paper"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Indicador de contagem discreto */}
      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
        <p>
          {categoriaAtiva === "Todos"
            ? `Exibindo todas as ${artigosFiltrados.length} publicações resumidas.`
            : `Exibindo ${artigosFiltrados.length} publicações sobre ${categoriaAtiva}.`}
        </p>
      </div>

      {/* Grid de Cartões Resumidos com Poucas Linhas (2 colunas) */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 items-stretch">
        {artigosFiltrados.map((artigo) => (
          <CardArtigo key={artigo.id} card={artigo} />
        ))}
      </div>
    </div>
  );
}
