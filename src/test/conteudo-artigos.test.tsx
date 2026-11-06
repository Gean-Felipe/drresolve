import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ArtigosEditorial } from "@/components/site/ArtigosEditorial";
import { cardsConteudo, categorias, filtrarCards } from "@/lib/artigos";

describe("Base de dados de Conteúdo Jurídico (24 Artigos Resumidos)", () => {
  it("contém exatamente 24 artigos no total com ids únicos", () => {
    expect(cardsConteudo).toHaveLength(24);
    expect(new Set(cardsConteudo.map((c) => c.id)).size).toBe(24);
  });

  it("possui exatamente as 5 opções de filtro", () => {
    expect(categorias).toEqual([
      "Todos",
      "Crédito rural",
      "Contratos empresariais",
      "Execuções e constrição",
      "Prevenção",
    ]);
  });

  it("possui exatamente 6 artigos resumidos para cada uma das 4 categorias", () => {
    const rural = filtrarCards("Crédito rural");
    expect(rural).toHaveLength(6);

    const contratos = filtrarCards("Contratos empresariais");
    expect(contratos).toHaveLength(6);

    const execucoes = filtrarCards("Execuções e constrição");
    expect(execucoes).toHaveLength(6);

    const prevencao = filtrarCards("Prevenção");
    expect(prevencao).toHaveLength(6);
  });

  it("todos os artigos possuem textos objetivos de poucas linhas", () => {
    for (const card of cardsConteudo) {
      expect(card.titulo.trim().length).toBeGreaterThan(5);
      expect(card.texto.trim().length).toBeGreaterThan(30);
      expect(card.texto.trim().length).toBeLessThan(300);
    }
  });
});

describe("Filtros e exibição dos cartões resumidos na interface", () => {
  it("renderiza todos os 24 cartões quando 'Todos' está ativo", () => {
    render(<ArtigosEditorial />);
    expect(screen.getAllByRole("article")).toHaveLength(24);
  });

  it("filtra exatamente 6 cartões ao selecionar 'Crédito rural'", () => {
    render(<ArtigosEditorial />);
    fireEvent.click(screen.getByRole("button", { name: "Crédito rural" }));

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "Crédito rural e financiamentos" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Alongamento e prorrogação de dívidas" }),
    ).toBeTruthy();
  });

  it("filtra exatamente 6 cartões ao selecionar 'Contratos empresariais'", () => {
    render(<ArtigosEditorial />);
    fireEvent.click(screen.getByRole("button", { name: "Contratos empresariais" }));

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "O contrato como oportunidade" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Não concorrência e confidencialidade (NDA)" }),
    ).toBeTruthy();
  });

  it("filtra exatamente 6 cartões ao selecionar 'Execuções e constrição'", () => {
    render(<ArtigosEditorial />);
    fireEvent.click(screen.getByRole("button", { name: "Execuções e constrição" }));

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "O ponto que ninguém quer ouvir" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Penhora de faturamento da empresa" })).toBeTruthy();
  });

  it("filtra exatamente 6 cartões ao selecionar 'Prevenção'", () => {
    render(<ArtigosEditorial />);
    fireEvent.click(screen.getByRole("button", { name: "Prevenção" }));

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "Auditoria preventiva (Compliance)" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Proteção do bem de família e da terra" }),
    ).toBeTruthy();
  });

  it("restaura a exibição dos 24 cartões ao clicar novamente em 'Todos'", () => {
    render(<ArtigosEditorial />);
    fireEvent.click(screen.getByRole("button", { name: "Prevenção" }));
    expect(screen.getAllByRole("article")).toHaveLength(6);

    fireEvent.click(screen.getByRole("button", { name: "Todos" }));
    expect(screen.getAllByRole("article")).toHaveLength(24);
  });
});
