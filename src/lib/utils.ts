import { clsx, type ClassValue } from "clsx";
import { defaultLang, ui } from "i18n/ui";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addHexOpacity(hexColor: string, opacityPercent = 100) {
  const opacity = Math.round((opacityPercent / 100) * 255);
  const hex = hexColor.replace("#", "");
  return `#${hex}${opacity.toString(16).padStart(2, "0")}`;
}

export function getLangFromUrl(url: URL | Location) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) {
    return lang as keyof typeof ui;
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof lang], ...values: string[]) {
    const translation = ui[lang][key] || ui[defaultLang][key];
    if (!values) return translation;
    return translation
      ? translation.replace(/{}/g, () => values.shift() || "")
      : "";
  };
}
