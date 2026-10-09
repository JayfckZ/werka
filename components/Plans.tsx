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
            {plans.map((p) => {
              const hl = !!p.highlight;
              const muted = hl ? "text-paper/60" : "text-ink/60";
              const faint = hl ? "text-paper/50" : "text-ink/50";

              // Numera as notas na ordem em que aparecem nos itens (1, 2, 3...).
              const notes: string[] = [];
              const items = p.items.map((it) =>
                typeof it === "string" ? { t: it, n: 0 } : { t: it.t, n: notes.push(it.note) }
              );

              return (
                <li
                  key={p.n}
                  className={`flex flex-col border-b py-10 lg:border-b-0 lg:border-l lg:px-8 ${
                    hl
                      ? "-mx-5 border-transparent bg-ink px-5 text-paper md:-mx-8 md:px-8 lg:mx-0"
                      : "border-line lg:first:border-l-0 lg:first:pl-0"
                  }`}
                >
                  <p className={`flex items-center font-mono text-xs ${hl ? "text-paper/50" : "text-ink/40"}`}>
                    {p.n}
                    {p.tag && (
                      <span className={`ml-3 border px-2 py-0.5 uppercase ${hl ? "border-paper/40 text-paper" : "border-ink/30 text-ink"}`}>{p.tag}</span>
                    )}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold md:text-3xl">{p.t}</h3>
                  <p className={`mt-2 ${muted}`}>{p.para}</p>

                  <ul className="mt-8 space-y-3 text-sm">
                    {items.map((i) => (
                      <li key={i.t} className="flex gap-3">
                        <span aria-hidden className={`font-mono ${hl ? "text-paper/50" : "text-principal"}`}>—</span>
                        <span>
                          {i.t}
                          {i.n > 0 && <sup className={`ml-0.5 font-mono ${hl ? "text-paper" : "text-principal"}`}>{i.n}</sup>}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {notes.length > 0 && (
                    <ul className={`mt-6 space-y-1 text-xs ${faint}`}>
                      {notes.map((n, k) => (
                        <li key={k}><sup className="mr-1 font-mono">{k + 1}</sup>{n}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-10">
                    <div className={`border-t pt-6 ${hl ? "border-paper/20" : "border-line"}`}>
                      <p className={`font-mono text-xs uppercase ${faint}`}>Investimento</p>
                      {p.price ? (
                        <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
                          {!p.priceExact && <span className={`font-mono text-xs uppercase ${faint}`}>a partir de</span>}
                          <span className="text-4xl font-bold tracking-tight md:text-5xl">{p.price}</span>
                          {p.priceUnit && <span className={`font-mono text-sm ${faint}`}>{p.priceUnit}</span>}
                        </p>
                      ) : (
                        <p className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Sob consulta</p>
                      )}

                      {hl ? (
                        <PlanLink plan={p.t} className="relative mt-6 inline-block bg-paper px-6 py-3.5 font-medium text-ink">
                          Pedir orçamento <span aria-hidden>→</span>
                          <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-principal" />
                        </PlanLink>
                      ) : (
                        <PlanLink plan={p.t} className="mt-6 inline-block border-b border-ink pb-0.5 font-medium transition-colors hover:border-principal hover:text-principal">
                          Pedir orçamento <span aria-hidden>→</span>
                        </PlanLink>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <p className="mt-10 max-w-xl text-sm text-ink/60">
          Cada projeto é diferente. Se o seu não cabe em nenhum desses formatos, conte o que precisa e montamos a proposta.
        </p>
      </div>
    </section>
  );
}