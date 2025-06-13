import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Método não permitido' }),
    };
  }

  try {
    const { domainId } = JSON.parse(event.body);

    if (!domainId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Parâmetro "domainId" é obrigatório.' }),
      };
    }

    const domainInfo = await resend.domains.get(domainId);
    const verifyResult = await resend.domains.verify(domainId);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Domínio consultado e verificação iniciada.',
        domain: domainInfo,
        verification: verifyResult,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro ao consultar/verificar domínio',
        error: error.message,
      }),
    };
  }
}