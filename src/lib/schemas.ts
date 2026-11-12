/**
 * Dados Estruturados Schema.org para Dr. Resolve — Advocacia e Consultoria Estratégica
 * Compatível com Rich Results e Local Business do Google
 */

export const BASE_URL = "https://advdrresolve.com.br";

export const OFFICE_DATA = {
  name: "Dr. Resolve — Advocacia e Consultoria Estratégica",
  legalName: "Dr. Resolve Advocacia e Consultoria",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  image: `${BASE_URL}/favicon.svg`,
  telephone: "+55-65-9811-0101",
  whatsapp: "https://wa.me/556598110101",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Washington, nº 318, Sala 04",
    addressLocality: "Cuiabá",
    addressRegion: "MT",
    postalCode: "78060-600",
    addressCountry: "BR",
    neighborhood: "Jardim das Américas",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -15.6179,
    longitude: -56.0682,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Mato Grosso",
    },
    {
      "@type": "Country",
      name: "Brasil",
    },
  ],
  priceRange: "$$",
};

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${BASE_URL}/#legalservice`,
    name: OFFICE_DATA.name,
    legalName: OFFICE_DATA.legalName,
    url: BASE_URL,
    logo: OFFICE_DATA.logo,
    image: OFFICE_DATA.image,
    telephone: OFFICE_DATA.telephone,
    address: OFFICE_DATA.address,
    geo: OFFICE_DATA.geo,
    openingHoursSpecification: OFFICE_DATA.openingHoursSpecification,
    areaServed: OFFICE_DATA.areaServed,
    priceRange: OFFICE_DATA.priceRange,
    description:
      "Advocacia e consultoria jurídica estratégica para produtores rurais, empresários e gestores em Mato Grosso e em todo o Brasil. Atuação em Direito Rural, Crédito Rural, Defesa Patrimonial e Advocacia Empresarial.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de Atuação Jurídica",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Direito Rural e Crédito Rural",
            description:
              "Análise de contratos rurais, renegociação de dívidas agrícolas, alongamento de crédito rural e defesa contra penhoras da safra.",
            url: `${BASE_URL}/direito-rural`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Advocacia Empresarial para PMEs",
            description:
              "Consultoria preventiva, gestão de contratos empresariais, defesas em execuções fiscais e relações bancárias.",
            url: `${BASE_URL}/advocacia-empresarial`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Defesa Patrimonial Legal",
            description:
              "Proteção de imóveis, bens produtivos e maquinários agrícolas contra atos de constrição, penhoras e leilões judiciais.",
            url: `${BASE_URL}/defesa-patrimonial`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Projeto Anjo da Guarda",
            description:
              "Assessoria jurídica continuada e preventiva para auditoria de riscos, guarda patrimonial e blindagem jurídica operacional.",
            url: `${BASE_URL}/anjo-da-guarda`,
          },
        },
      ],
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Dr. Resolve",
    description: "Advocacia e Consultoria Estratégica para Produtores Rurais e Empresários",
    publisher: {
      "@id": `${BASE_URL}/#legalservice`,
    },
    inLanguage: "pt-BR",
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${BASE_URL}${item.path}`,
    })),
  };
}

export function getServiceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "LegalService",
    name,
    description,
    url: `${BASE_URL}${path}`,
    provider: {
      "@id": `${BASE_URL}/#legalservice`,
    },
    areaServed: OFFICE_DATA.areaServed,
  };
}

