import FormData from "form-data";
import Mailgun from "mailgun.js";

const {
  NETLIFY_EMAILS_PROVIDER_API_KEY,
  NETLIFY_EMAILS_MAILGUN_DOMAIN,
  EMAIL_TO,
  NETLIFY_MAIL_FROM,
} = process.env;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: NETLIFY_EMAILS_PROVIDER_API_KEY,
});

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { subject, html } = JSON.parse(event.body);

    if (!subject || !html) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Incomplete Params" }),
      };
    }

    const data = await mg.messages.create(NETLIFY_EMAILS_MAILGUN_DOMAIN, {
      from: NETLIFY_MAIL_FROM,
      to: EMAIL_TO,
      subject,
      html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        sent: { from: NETLIFY_MAIL_FROM, to: EMAIL_TO, subject, html },
        mailgunResponse: data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Erro ao enviar e-mail",
        error: error.message,
      }),
    };
  }
}
