/**
 * Google Analytics 4 (GA4) & Tag Manager - Módulo de Rastreamento de Conversões
 * Dr. Resolve Advocacia e Consultoria Estratégica
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Measurement ID configurável via env ou valor padrão
export const GA_MEASUREMENT_ID =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GA_MEASUREMENT_ID) || "G-XXXXXXXXXX";

export function initGA(measurementId: string = GA_MEASUREMENT_ID) {
  if (typeof window === "undefined" || !measurementId || measurementId === "G-XXXXXXXXXX") {
    return;
  }

  // Evita reinjeção
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: window.location.pathname,
    send_page_view: true,
  });
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Envia tanto para o gtag quanto para o dataLayer (compatível com GTM)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/**
 * Rastreia cliques de conversão direta no WhatsApp
 */
export function trackWhatsAppClick(origem: string = "site") {
  trackEvent("whatsapp_click", {
    event_category: "conversion",
    event_label: "WhatsApp - Contato Direto",
    origem,
    destination: "https://wa.me/556598110101",
  });
}

/**
 * Rastreia cliques no telefone de contato
 */
export function trackPhoneClick(telefone: string = "(65) 9811-0101") {
  trackEvent("phone_click", {
    event_category: "conversion",
    event_label: "Telefone - Ligação Direta",
    telefone,
  });
}

/**
 * Rastreia envio de formulário de contato / lead
 */
export function trackFormSubmission(formName: string = "contato_inicial") {
  trackEvent("generate_lead", {
    event_category: "form_submission",
    event_label: formName,
    form_name: formName,
  });
}

/**
 * Rastreia navegação SPA entre páginas
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;

  trackEvent("page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}
