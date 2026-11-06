import { BASE_URL } from "./schemas";

export interface SeoOptions {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  type?: "website" | "article";
  schemas?: Record<string, unknown>[];
  noIndex?: boolean;
}

export function seo(
  titleOrOptions: string | SeoOptions,
  legacyDescription?: string,
  legacyPathname?: string,
) {
  let opts: SeoOptions;

  if (typeof titleOrOptions === "string") {
    opts = {
      title: titleOrOptions,
      description: legacyDescription || "",
      pathname: legacyPathname || "/",
    };
  } else {
    opts = titleOrOptions;
  }

  const cleanPath = (opts.pathname || "/").replace(/\/$/, "") || "/";
  const canonicalUrl = cleanPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${cleanPath}`;
  const fullTitle = opts.title.includes("Dr. Resolve")
    ? opts.title
    : `${opts.title} | Dr. Resolve Advocacia`;
  const defaultImage = `${BASE_URL}/favicon.svg`;
  const ogImage = opts.image || defaultImage;

  const metaList: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: opts.description },
    {
      name: "robots",
      content: opts.noIndex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: opts.type || "website" },
    { property: "og:image", content: ogImage },
    { property: "og:site_name", content: "Dr. Resolve — Advocacia e Consultoria" },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: ogImage },
  ];

  const linksList: Array<Record<string, string>> = [
    { rel: "canonical", href: canonicalUrl },
  ];

  const scriptsList: Array<Record<string, string>> = [];

  if (opts.schemas && opts.schemas.length > 0) {
    opts.schemas.forEach((schema) => {
      scriptsList.push({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      });
    });
  }

  return {
    meta: metaList,
    links: linksList,
    scripts: scriptsList,
  };
}
