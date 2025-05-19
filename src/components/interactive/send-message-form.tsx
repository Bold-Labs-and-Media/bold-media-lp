import { useTranslations } from "@/lib/utils";
import type { ui } from "i18n/ui";
import { Send } from "lucide-react";
import { useCallback } from "react";
import { Button } from "../ui/button";

type Props = {
  lang: keyof typeof ui;
};

export default function SendMessageForm({ lang }: Props) {
  const t = useCallback(useTranslations(lang), [lang]);
  return (
    <form className="bg-white rounded-md shadow-md p-8 space-y-6 row-span-2">
      <h3 className="font-bold text-2xl">{t("contact.form-title")}</h3>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm" htmlFor="name">
          {t("contact.form-name")}
        </label>
        <input
          className="bg-input border-input-border border focus:outline-primary/60 rounded-md py-2.5 px-3"
          type="text"
          required
          id="name"
          name="name"
          placeholder={t("contact.form-name-placeholder")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm" htmlFor="email">
          {t("contact.form-email")}
        </label>
        <input
          className="bg-input border-input-border border focus:outline-primary/60 rounded-md py-2.5 px-3"
          type="email"
          required
          id="email"
          name="email"
          placeholder={t("contact.form-email-placeholder")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm" htmlFor="message">
          {t("contact.form-message")}
        </label>
        <textarea
          className="bg-input border-input-border border rounded-md focus:outline-primary/60 py-2.5 px-3 resize-y h-36 max-h-48 min-h-24"
          required
          id="message"
          name="message"
          placeholder={t("contact.form-message-placeholder")}
        />
      </div>
      <Button className="w-full">
        {t("contact.form-submit")} <Send />
      </Button>
    </form>
  );
}
