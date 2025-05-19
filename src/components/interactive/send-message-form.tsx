import { Send } from "lucide-react";
import { Button } from "../ui/button";

export default function SendMessageForm() {
  return (
    <form className="bg-white rounded-md shadow-md p-8 space-y-6 row-span-2">
      <h3 className="font-bold text-2xl">Envie-nos uma mensagem</h3>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm" htmlFor="name">
          Nome
        </label>
        <input
          className="bg-input border-input-border border focus:outline-primary/60 rounded-md py-2.5 px-3"
          type="text"
          required
          id="name"
          name="name"
          placeholder="Seu nome"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="bg-input border-input-border border focus:outline-primary/60 rounded-md py-2.5 px-3"
          type="email"
          required
          id="email"
          name="email"
          placeholder="email@exemplo.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm" htmlFor="message">
          Mensagem
        </label>
        <textarea
          className="bg-input border-input-border border rounded-md focus:outline-primary/60 py-2.5 px-3 resize-y h-36 max-h-48 min-h-24"
          required
          id="message"
          name="message"
          placeholder="Como podemos ajudar?"
        />
      </div>
      <Button className="w-full">
        Enviar mensagem <Send />
      </Button>
    </form>
  );
}
