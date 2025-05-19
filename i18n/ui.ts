export const languages = {
  en: "English",
  pt: "Português",
};

export const defaultLang = "pt";

type UI = Record<keyof typeof languages, Record<string, string>>;

export const ui: UI = {
  pt: {
    // SEO
    "seo.title": "Bold Media",
    "seo.description": "",
    "seo.keywords": "",
  },
  en: {
    // SEO
    "seo.title": "Bold Media",
    "seo.description": "",
    "seo.keywords": "",
  },
} as const;
