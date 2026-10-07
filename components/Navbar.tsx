"use client";
import { useEffect, useState } from "react";
import { nav } from "../data/site";
import logo from "../public/werka-cropped-logo.png"
import Image from "next/image";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? "border-line bg-paper/90 backdrop-blur" : "border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio"><Image src={logo} width={100} alt="WERKA LOGO" /></a>
        <nav aria-label="Principal" className="hidden gap-8 text-sm md:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-ink/60 transition-colors hover:text-ink">{n.label}</a>)}
        </nav>
        <a href="#contato" className="hidden border border-ink px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper md:inline-block">Fale conosco</a>
        <button aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)} className="p-2 font-mono text-sm md:hidden">{open ? "fechar" : "menu"}</button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="flex flex-col border-t border-line px-5 pb-4 md:hidden">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-lg">{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}
