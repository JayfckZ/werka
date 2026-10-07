import { steps } from "../data/site";
export default function Process() {
  return (
    <section id="processo" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Da ideia ao produto.</h2>
        <p className="mt-4 font-mono text-xs text-ink/50">Problema → Estratégia → Desenvolvimento → Produto</p>
        <ol className="relative mt-16 border-l border-line pl-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:pl-0 lg:pt-8">
          <span aria-hidden className="absolute inset-x-0 top-0 hidden h-px bg-principal lg:block" />
          {steps.map((s, i) => (
            <li key={s.t} className="relative pb-10 lg:pb-0">
              <span aria-hidden className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-principal lg:-top-[37px] lg:left-0" />
              <p className="font-mono text-xs text-ink/50">0{i + 1} · {s.flow}</p>
              <h3 className="mt-2 text-2xl font-semibold">{s.t}</h3>
              <p className="mt-2 max-w-xs text-ink/60">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
