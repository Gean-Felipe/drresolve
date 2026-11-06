/**
 * Base de dados oficial da seção "Conteúdo jurídico" do Dr. Resolve.
 * Contém publicações jurídicas em formato objetivo e resumido (poucas linhas por cartão),
 * organizadas em 6 tópicos claros para cada uma das 4 categorias (total: 24 cartões).
 */

export const categorias = [
  "Todos",
  "Crédito rural",
  "Contratos empresariais",
  "Execuções e constrição",
  "Prevenção",
] as const;

export type Categoria = (typeof categorias)[number];
export type CategoriaCard = Exclude<Categoria, "Todos">;

export type ArtigoCard = {
  id: string;
  categoria: CategoriaCard;
  titulo: string;
  texto: string;
  paragrafos?: string[];
  emPreparacao?: boolean;
};

export const cardsConteudo: ArtigoCard[] = [
  // =========================================================================
  // --- CATEGORIA 01: CRÉDITO RURAL (6 CARTÕES RESUMIDOS) ---
  // =========================================================================
  {
    id: "credito-rural-financiamentos",
    categoria: "Crédito rural",
    titulo: "Crédito rural e financiamentos",
    texto:
      "Análise técnica de linhas de custeio, investimento e comercialização, avaliando taxas, exigência de garantias e a real capacidade de pagamento do produtor.",
  },
  {
    id: "alongamento-dividas-rurais-direito",
    categoria: "Crédito rural",
    titulo: "Alongamento e prorrogação de dívidas",
    texto:
      "Aplicação do direito legal à prorrogação do cronograma de pagamento em decorrência de quebra de safra, intempéries climáticas ou frustração de receita (Súmula 298 STJ).",
  },
  {
    id: "cedulas-credito-rural-cpr-garantias",
    categoria: "Crédito rural",
    titulo: "Cédula de Crédito Rural (CCR) e CPR",
    texto:
      "Exame das condições contratuais em títulos do agronegócio e mitigação de excesso de garantias reais sobre a colheita futura e a propriedade familiar.",
  },
  {
    id: "juros-abusivos-encargos-ilegais-agricola",
    categoria: "Crédito rural",
    titulo: "Juros e encargos em contratos agrícolas",
    texto:
      "Auditoria jurídica e contábil para identificar encargos moratórios ilegais, comissões de permanência abusivas e venda casada de seguros em cédulas rurais.",
  },
  {
    id: "seguro-agricola-proagro-perdas-climaticas",
    categoria: "Crédito rural",
    titulo: "Seguro agrícola e Proagro",
    texto:
      "Orientação técnica na formalização de notificações de sinistro e laudos agronômicos, resguardando o produtor contra recusas injustificadas de indenização.",
  },
  {
    id: "fiscalizacao-destinacao-recursos-rurais",
    categoria: "Crédito rural",
    titulo: "Fiscalização e aplicação de recursos",
    texto:
      "Organização e comprovação documental da correta destinação dos recursos do Plano Safra para afastar alegações bancárias de desvio de finalidade.",
  },

  // =========================================================================
  // --- CATEGORIA 02: CONTRATOS EMPRESARIAIS (6 CARTÕES RESUMIDOS) ---
  // =========================================================================
  {
    id: "contrato-como-oportunidade",
    categoria: "Contratos empresariais",
    titulo: "O contrato como oportunidade",
    texto:
      "Estruturação de instrumentos para transformar conversas em negócios seguros, garantindo prazos, preços, exclusividade, volume e proteção de margem.",
  },
  {
    id: "clausulas-nao-concorrencia-confidencialidade",
    categoria: "Contratos empresariais",
    titulo: "Não concorrência e confidencialidade (NDA)",
    texto:
      "Elaboração de cláusulas e termos com delimitação temporal, geográfica e material válida perante a Justiça para resguardar know-how e carteira de clientes.",
  },
  {
    id: "multas-contratuais-clausula-penal",
    categoria: "Contratos empresariais",
    titulo: "Multas contratuais e cláusula penal",
    texto:
      "Definição de penalidades equilibradas e revisão judicial de cominações desproporcionais que possam sufocar a saúde financeira da empresa.",
  },
  {
    id: "rescisao-imotivada-aviso-previo",
    categoria: "Contratos empresariais",
    titulo: "Rescisão imotivada e investimentos",
    texto:
      "Exigência de prazo razoável de aviso prévio e indenização de custos não amortizados em caso de rompimento unilateral brusco de contratos contínuos.",
  },
  {
    id: "fornecimento-distribuicao-margens",
    categoria: "Contratos empresariais",
    titulo: "Contratos de fornecimento e distribuição",
    texto:
      "Gestão de indexadores econômicos, reajustes periódicos e cláusulas de hardship para proteger a lucratividade e mitigar riscos na cadeia de suprimentos.",
  },
  {
    id: "arbitragem-mediacao-corporativa",
    categoria: "Contratos empresariais",
    titulo: "Arbitragem e mediação corporativa",
    texto:
      "Resolução célere, especializada e sob estrito sigilo de controvérsias comerciais complexas, evitando a exposição e morosidade do Judiciário.",
  },

  // =========================================================================
  // --- CATEGORIA 03: EXECUÇÕES E CONSTRIÇÃO (6 CARTÕES RESUMIDOS) ---
  // =========================================================================
  {
    id: "ponto-que-ninguem-quer-ouvir",
    categoria: "Execuções e constrição",
    titulo: "O ponto que ninguém quer ouvir",
    texto:
      "Atuação técnica antes da constrição para negociar, substituir bens ou parcelar o débito, evitando chegar ao leilão com margem de manobra zero.",
  },
  {
    id: "penhora-faturamento-empresa-limites",
    categoria: "Execuções e constrição",
    titulo: "Penhora de faturamento da empresa",
    texto:
      "Defesa processual para limitar ou afastar bloqueios de faturamento, impedindo constrições excessivas que inviabilizem salários e o capital de giro.",
  },
  {
    id: "embargos-execucao-impugnacao-tecnicas",
    categoria: "Execuções e constrição",
    titulo: "Embargos e exceção de pré-executividade",
    texto:
      "Arguição imediata de excesso de execução, nulidade de citação e prescrição para combater bloqueios telemáticos via Sisbajud e restrições Renajud.",
  },
  {
    id: "penhora-imoveis-reavaliacao-judicial",
    categoria: "Execuções e constrição",
    titulo: "Penhora de imóveis e reavaliação",
    texto:
      "Impugnação técnica de laudos judiciais desatualizados para impedir a subavaliação do patrimônio e a arrematação de propriedades por preço vil.",
  },
  {
    id: "desconsideracao-personalidade-juridica-socios",
    categoria: "Execuções e constrição",
    titulo: "Desconsideração da personalidade jurídica",
    texto:
      "Proteção dos bens particulares dos sócios contra dívidas da pessoa jurídica, exigindo prova incontestável de desvio de finalidade ou confusão patrimonial.",
  },
  {
    id: "leiloes-judiciais-medidas-urgencia",
    categoria: "Execuções e constrição",
    titulo: "Leilões judiciais e medidas de urgência",
    texto:
      "Identificação de vícios de intimação, editais irregulares e adoção de medidas emergenciais para anular ou suspender hastas públicas.",
  },

  // =========================================================================
  // --- CATEGORIA 04: PREVENÇÃO (6 CARTÕES RESUMIDOS) ---
  // =========================================================================
  {
    id: "auditoria-juridica-preventiva-compliance",
    categoria: "Prevenção",
    titulo: "Auditoria preventiva (Compliance)",
    texto:
      "Mapeamento antecipado de contratos, contingências fiscais e passivos ocultos, blindando a tomada de decisões antes que se tornem litígios.",
  },
  {
    id: "protecao-bem-de-familia-pequena-propriedade",
    categoria: "Prevenção",
    titulo: "Proteção do bem de família e da terra",
    texto:
      "Organização probatória e registral para assegurar a impenhorabilidade legal do imóvel residencial familiar e da pequena propriedade rural produtiva.",
  },
  {
    id: "estruturacao-patrimonial-governanca",
    categoria: "Prevenção",
    titulo: "Estruturação patrimonial e sucessória",
    texto:
      "Planejamento de governança e transição geracional segura para perpetuar o acervo familiar, reduzindo custos tributários e inventários morosos.",
  },
  {
    id: "gestao-documental-rastreabilidade",
    categoria: "Prevenção",
    titulo: "Gestão documental e rastreabilidade",
    texto:
      "Padronização no arquivamento de comprovantes de quitação, canhotos de entrega e notificações para garantir suporte probatório imediato em juízo.",
  },
  {
    id: "mitigacao-passivos-trabalhistas-producao",
    categoria: "Prevenção",
    titulo: "Mitigação de passivos trabalhistas",
    texto:
      "Revisão preventiva de rotinas operacionais, terceirizações e conformidade com normas regulamentadoras no campo e na empresa.",
  },
  {
    id: "prevencao-bancaria-limites-garantias",
    categoria: "Prevenção",
    titulo: "Prevenção bancária e limites de garantia",
    texto:
      "Negociação antecipada para mitigar avais pessoais ilimitados e cláusulas de vencimento cruzado que ameacem o patrimônio particular do gestor.",
  },
];

// Compatibilidade de nomes com componentes e testes existentes
export type CardConteudo = ArtigoCard;
export type Artigo = ArtigoCard;
export const artigos = cardsConteudo;

/**
 * Retorna os cards da categoria selecionada (ou todos se "Todos").
 */
export function filtrarCards(
  categoria: Categoria,
  base: ArtigoCard[] = cardsConteudo,
): ArtigoCard[] {
  return categoria === "Todos" ? base : base.filter((c) => c.categoria === categoria);
}
