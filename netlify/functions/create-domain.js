import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // sempre use variável de ambiente

export async function handler(event, context) {
  try {
    const { name } = JSON.parse(event.body);

    if (!name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Parâmetro "name" é obrigatório.' }),
      };
    }

    const domain = await resend.domains.create({ name });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Domínio criado com sucesso', domain }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro ao criar domínio', error: error.message }),
    };
  }
}