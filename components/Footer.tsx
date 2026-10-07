import { nav, contact } from "../data/site";
import Image from "next/image";
import logo from "../public/werka-cropped-white-logo.png"
export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <Image src={logo} alt={"WERKA LOGO"} width={300} />
          <p className="mt-3 max-w-xs text-white/60">Tecnologia para transformar ideias em soluções.</p>
        </div>
        <nav aria-label="Rodapé" className="md:col-span-3"><ul className="space-y-2 text-sm text-white/70">{nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}</ul></nav>
        <ul className="space-y-2 text-sm text-white/70 md:col-span-3">{contact.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{s.label}</a></li>)}</ul>
      </div>
      <div aria-hidden className="h-px bg-principal" />
      <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-white/40 md:px-8">© 2026 WERKA&trade;. Todos os direitos reservados.</p>
    </footer>
  );
}
