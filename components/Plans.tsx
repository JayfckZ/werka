import Reveal from "./Reveal";
import PlanLink from "./PlanLink";
import { plans } from "../data/site";

export default function Plans() {
  return (
    <section id="planos" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl lg:col-span-7">Escolha por onde começar.</h2>
          <p className="max-w-md text-lg text-ink/70 lg:col-span-4 lg:col-start-9 lg:self-end">
            Três formatos de trabalho para o que você precisa construir. O valor final é definido depois que entendemos o escopo.
          </p>
        </div>

        <Reveal>
          <ol className="mt-16 grid border-t border-ink lg:grid-cols-3">
            {plans.map((p) => (
              <li key={p.n} className="flex flex-col border-b border-line py-10 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0">
                <p className="font-mono text-xs text-ink/40">{p.n}</p>
                <h3 className="mt-4 text-2xl font-semibold md:text-3xl">{p.t}</h3>
                <p className="mt-2 text-ink/60">{p.para}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden className="font-mono text-principal">—</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <p className="font-mono text-xs uppercase text-ink/50">Investimento</p>
                  <p className="mt-1 font-mono text-lg">{p.price ?? "Sob consulta"}</p>
                  <PlanLink plan={p.t} className="mt-6 inline-block border-b border-ink pb-0.5 font-medium transition-colors hover:border-principal hover:text-principal">
                    Pedir orçamento <span aria-hidden>→</span>
                  </PlanLink>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="mt-10 max-w-xl text-sm text-ink/60">
          Cada projeto é diferente. Se o seu não cabe em nenhum desses formatos, conte o que precisa e montamos a proposta.
        </p>
      </div>
    </section>
  );
}