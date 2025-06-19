import type { ui } from "@/i18n/ui";
import { useTranslations } from "@/lib/utils";
import { useCallback } from "react";

export function useTranslation(lang: keyof typeof ui) {
  const t = useCallback(useTranslations(lang), [lang]);
  return t;
}
