import ContactForm from "./ContactForm";
import { contact } from "../data/site";
export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Tem um projeto em mente? Vamos conversar.</h2>
          <p className="mb-12 mt-6 max-w-lg text-lg text-ink/70">Conte um pouco sobre o que você precisa. A gente entra em contato para entender o projeto.</p>
          <ContactForm />
        </div>
        <aside className="self-start border-t border-ink pt-6 lg:col-span-4 lg:col-start-9">
          <h3 className="font-mono text-xs uppercase text-ink/50">Prefere falar direto?</h3>
          <dl className="mt-6 space-y-6">
            <div><dt className="text-sm text-ink/50">WhatsApp</dt><dd className="font-mono text-lg">{contact.whatsapp.display}</dd></div>
            <div><dt className="text-sm text-ink/50">E-mail</dt><dd className="font-mono text-lg"><a href={`mailto:${contact.email}`} className="hover:text-principal">{contact.email}</a></dd></div>
          </dl>
          <a href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border border-ink px-6 py-3.5 font-medium transition-colors hover:bg-ink hover:text-paper">Falar pelo WhatsApp</a>
        </aside>
      </div>
    </section>
  );
}
