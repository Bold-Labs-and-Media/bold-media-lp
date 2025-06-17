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

    const data = await resend.emails.send({ from, to:EMAIL_TO, subject, html });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        sent: { from, to:EMAIL_TO, subject, html },
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
