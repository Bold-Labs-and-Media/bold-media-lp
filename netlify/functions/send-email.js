import { Resend } from "resend";

const { EMAIL_TO, RESEND_API_KEY } = process.env;

const resend = new Resend(RESEND_API_KEY);

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "method not permited" }),
    };
  }

  try {
    const { from, subject, html } = JSON.parse(event.body);

    if (!from || !subject || !html) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Incomplete Params" }),
      };
    }

    console.log("Sending email with params:", {
      from,
      EMAIL_TO,
      subject,
      html,
    });

    const data = await resend.emails.send({ from, EMAIL_TO, subject, html });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email enviado com sucesso!",
        sent: { from, EMAIL_TO, subject, html },
        resendResponse: data,
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
