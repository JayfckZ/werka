import Reveal from "./Reveal";
import { areas } from "../data/site";
export default function About() {
  return (
    <section id="sobre" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:sticky lg:top-28 lg:col-span-5 lg:self-start">Desenvolvemos tecnologia para fazer negócios funcionarem melhor.</h2>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal><p className="max-w-xl text-lg leading-relaxed text-ink/70">A WERKA nasceu da ideia de que tecnologia não precisa ser complicada para gerar impacto. Criamos experiências digitais, landing pages e sistemas web pensados para resolver problemas específicos de cada negócio - da primeira ideia ao produto em produção.</p></Reveal>
          <dl className="mt-14 grid border-t border-line sm:grid-cols-2">
            {areas.map((a) => (
              <div key={a.n} className="border-b border-line py-6 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                <dt className="flex items-baseline gap-3"><span className="font-mono text-xs text-ink/40">{a.n}</span><span className="text-sm font-semibold uppercase tracking-wide">{a.t}</span></dt>
                <dd className="mt-2 text-sm text-ink/60">{a.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-14 text-2xl font-semibold leading-snug">Não entregamos apenas código. <span className="text-principal">Entregamos soluções.</span></p>
        </div>
      </div>
    </section>
  );
}
