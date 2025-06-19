type EmailData = {
  html: string;
};

export async function sendEmail({ html }: EmailData) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify({
      html,
      subject: "[Bold Media] Nova mensagem recebida através do website",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
