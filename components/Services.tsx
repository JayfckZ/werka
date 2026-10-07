import { services } from "../data/site";
export default function Services() {
  return (
    <section id="servicos" className="border-t border-line bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">O que podemos construir juntos?</h2>
        <ul className="mt-16 border-t border-ink">
          {services.map((s, i) => (
            <li key={s.t} className="group relative border-b border-line">
              <a href="#contato" className="grid items-baseline gap-2 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                <span className="font-mono text-xs text-ink/40 md:col-span-1">0{i + 1}</span>
                <h3 className="text-2xl font-semibold transition-transform duration-300 group-hover:translate-x-2 md:col-span-6 md:text-4xl">{s.t}</h3>
                <p className="text-ink/60 md:col-span-4">{s.d}</p>
                <span aria-hidden className="hidden text-right font-mono text-lg transition-colors group-hover:text-principal md:col-span-1 md:block">+</span>
              </a>
              <span aria-hidden className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-principal transition-transform duration-500 group-focus-within:scale-x-100 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
