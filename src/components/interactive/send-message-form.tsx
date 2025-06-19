import type { ui } from "@/i18n/ui";
import { sendEmail } from "@/lib/api";
import { buildSendMessageHTML, useTranslations } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";

type Props = {
  lang: keyof typeof ui;
};

const formSchema = z.object({
  name: z.string().min(1, "form.required-name"),
  email: z.string().email("form.invalid-email"),
  message: z.string().min(1, "form.required-message"),
});

type FormData = z.infer<typeof formSchema>;

export default function SendMessageForm({ lang }: Props) {
  const t = useCallback(useTranslations(lang), [lang]);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit({ email, message, name }: FormData) {
    try {
      const emailHtml = buildSendMessageHTML(name, email, message);
      await sendEmail({
        html: emailHtml,
      });
      toast.success(t("contact.form-success"));
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t("contact.form-error"));
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white rounded-md shadow-md p-8 space-y-6 row-span-2"
      >
        <h3 className="font-bold text-2xl">{t("contact.form-title")}</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel> {t("contact.form-name")}</FormLabel>
              <FormControl>
                <input
                  className="bg-input border-input-border border focus:outline-primary/60 rounded-md py-2.5 px-3"
                  type="text"
                  required
                  id="name"
                  maxLength={100}
                  minLength={1}
                  placeholder={t("contact.form-name-placeholder")}
                  {...field}
                />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel> {t("contact.form-email")}</FormLabel>
              <FormControl>
                <input
                  className="bg-input border-input-border border focus:outline-primary/60 rounded-md py-2.5 px-3"
                  type="email"
                  required
                  id="email"
                  placeholder={t("contact.form-email-placeholder")}
                  {...field}
                />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel> {t("contact.form-message")}</FormLabel>
              <FormControl>
                <textarea
                  className="bg-input border-input-border border rounded-md focus:outline-primary/60 py-2.5 px-3 resize-y h-36 max-h-48 min-h-24"
                  required
                  id="message"
                  minLength={1}
                  maxLength={1000}
                  placeholder={t("contact.form-message-placeholder")}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-right text-xs text-muted-foreground/70">
                {form.getValues("message").length}/1000
              </FormDescription>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? (
            <div className="size-4 animate-spin rounded-full border-2 border-black/10 border-t-white" />
          ) : (
            <>
              {t("contact.form-submit")} <Send />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
