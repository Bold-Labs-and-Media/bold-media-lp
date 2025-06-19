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
  if (!response.ok) {
    throw new Error("Failed to send email");
  }
  return response.json();
}
