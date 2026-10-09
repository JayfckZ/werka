"use client";
import { useEffect, useState, type FormEvent } from "react";
import { plans } from "../data/site";

const fields = [
  { id: "name", label: "Nome*", type: "text", ac: "name", req: true },
  { id: "email", label: "E-mail*", type: "email", ac: "email", req: true },
  { id: "company", label: "Empresa (opcional)", type: "text", ac: "organization", req: false, wide: true },
];
const input = "w-full border-b border-ink/30 bg-transparent py-3 outline-none transition-colors focus:border-principal";
const NOT_SURE = "Ainda não sei, quero conversar";

export default function ContactForm() {
  const [st, setSt] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [plan, setPlan] = useState("");

  // Os botões "Pedir orçamento" (PlanLink) disparam este evento.
  useEffect(() => {
    const on = (e: Event) => setPlan((e as CustomEvent<string>).detail);
    window.addEventListener("select-plan", on);
    return () => window.removeEventListener("select-plan", on);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setSt("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!r.ok) throw new Error(); form.reset(); setPlan(""); setSt("ok");
    } catch { setSt("error"); }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.id} className={f.wide ? "sm:col-span-2" : ""}>
          <label htmlFor={f.id} className="font-mono text-xs uppercase text-ink/50">{f.label}</label>
          <input id={f.id} name={f.id} type={f.type} autoComplete={f.ac} required={f.req} className={input} />
        </div>
      ))}
      <div className="sm:col-span-2">
        <label htmlFor="plan" className="font-mono text-xs uppercase text-ink/50">Plano de interesse*</label>
        <div className="relative">
          <select id="plan" name="plan" required value={plan} onChange={(e) => setPlan(e.target.value)} className={`${input} appearance-none pr-8 ${plan ? "" : "text-ink/50"}`}>
            <option value="" disabled>Selecione um plano</option>
            {plans.map((p) => <option key={p.n} value={p.t} className="text-ink">{p.t}</option>)}
            <option value={NOT_SURE} className="text-ink">{NOT_SURE}</option>
          </select>
          <span aria-hidden className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-mono text-ink/50">↓</span>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="font-mono text-xs uppercase text-ink/50">Mensagem*</label>
        <textarea id="message" name="message" rows={4} required className={`${input} resize-none`} />
      </div>
      <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
        <button disabled={st === "sending"} className="relative bg-ink px-6 py-3.5 font-medium text-paper disabled:opacity-40 cursor-pointer">
          {st === "sending" ? "Enviando..." : "Enviar mensagem"}<span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-principal" />
        </button>
        <p role="status" aria-live="polite" className="text-sm text-ink/70">
          {st === "ok" && "Mensagem enviada. Entraremos em contato em breve."}
          {st === "error" && "Não foi possível enviar. Tente novamente ou fale pelo WhatsApp."}
        </p>
      </div>
    </form>
  );
}