import { defaultLang, ui } from "@/i18n/ui";
import { clsx, type ClassValue } from "clsx";
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

export function buildSendMessageHTML(
  name: string,
  email: string,
  message: string
) {
  return `
    <!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>Nova Mensagem - Bold Media</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      padding: 20px;
      color: #333;
    }

    .email-container {
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    h2 {
      color: #111;
      margin-bottom: 25px;
    }

    .section-title {
      font-weight: bold;
      margin-top: 20px;
      color: #444;
    }

    .content {
      background-color: #f0f0f0;
      padding: 12px;
      border-radius: 5px;
      margin-top: 5px;
      white-space: pre-wrap;
    }

    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h2>Envie-nos uma mensagem - Formulário do Website</h2>

    <div>
      <div class="section-title">Nome do Remetente:</div>
      <div class="content">${sanitizeInput(name)}</div>

      <div class="section-title">Email do Remetente:</div>
      <div class="content">${sanitizeInput(email)}</div>

      <div class="section-title">Mensagem:</div>
      <div class="content">${sanitizeInput(message)}</div>
    </div>

    <div class="footer">
      Esta mensagem foi enviada através do formulário de contacto do website da <strong>Bold Media</strong>.
    </div>
  </div>
</body>
</html>
  `;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>?/gm, "") // remove tags HTML
    .replace(/[<>]/g, "") // remove < e >
    .trim(); // remove espaços nos extremos
}
