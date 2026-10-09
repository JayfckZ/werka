import { services } from "../data/site";
import PlanLink from "./PlanLink";

export default function Services() {
  return (
    <section id="servicos" className="border-t border-line bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">O que podemos construir juntos?</h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">Abra cada item para entender o que é, quando faz sentido e como podemos ajudar.</p>

        <ul className="mt-16 border-t border-ink">
          {services.map((s, i) => (
            <li key={s.t} className="group/li relative border-b border-line">
              {/* name agrupa os <details>: abrir um fecha o outro (navegadores modernos) */}
              <details className="group/d" {...{ name: "servico" }}>
                <summary className="grid cursor-pointer list-none items-baseline gap-2 py-8 md:grid-cols-12 md:gap-6 md:py-10 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-xs text-ink/40 md:col-span-1">0{i + 1}</span>
                  <h3 className="text-2xl font-semibold transition-transform duration-300 group-hover/li:translate-x-2 md:col-span-6 md:text-4xl">{s.t}</h3>
                  <p className="text-ink/60 md:col-span-4">{s.d}</p>
                  <span aria-hidden className="hidden text-right font-mono text-lg transition-transform duration-300 group-hover/li:text-principal group-open/d:rotate-45 md:col-span-1 md:block">+</span>
                </summary>

                <div className="grid gap-8 pb-10 md:grid-cols-12 md:gap-6">
                  <p className="text-lg leading-relaxed text-ink/80 md:col-span-6 md:col-start-2">{s.o}</p>
                  <div className="md:col-span-4 md:col-start-8">
                    <p className="font-mono text-xs uppercase text-ink/50">Faz sentido quando</p>
                    <p className="mt-2 text-ink/70">{s.q}</p>
                    <PlanLink plan={s.plan} className="mt-6 inline-block border-b border-ink pb-0.5 font-medium transition-colors hover:border-principal hover:text-principal">
                      Conversar sobre isso <span aria-hidden>→</span>
                    </PlanLink>
                  </div>
                </div>
              </details>
              <span aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-principal transition-transform duration-500 group-focus-within/li:scale-x-100 group-hover/li:scale-x-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}