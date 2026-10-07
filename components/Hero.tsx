import { projects } from "../data/site";
export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-40">
      <div aria-hidden className="grid-tech absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.4rem]">Tecnologia que resolve problemas reais.</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">Desenvolvemos sites, sistemas e soluções digitais sob medida para empresas que precisam transformar processos, ideias e oportunidades em produtos que funcionam.</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#projetos" className="relative bg-ink px-6 py-3.5 font-medium text-paper">Conheça nossos projetos<span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-principal" /></a>
            <a href="#contato" className="border-b border-ink pb-0.5 font-medium transition-colors hover:border-principal hover:text-principal">Fale com a WERKA</a>
          </div>
        </div>
        <aside aria-label="Projetos em produção" className="self-end lg:col-span-4 lg:col-start-9">
          <p className="font-mono text-xs uppercase text-ink/50">Em produção</p>
          <ol className="relative mt-6 pl-8">
            <span aria-hidden className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-principal" />
            {projects.map((p) => (
              <li key={p.slug} className="relative pb-8">
                <span aria-hidden className="absolute -left-[37px] top-2 size-2.5 rounded-full bg-ink ring-4 ring-paper" />
                <a href="#projetos" className="group block"><span className="text-3xl font-bold transition-colors group-hover:text-principal">{p.name}</span><span className="block font-mono text-xs text-ink/50">{p.category}</span></a>
              </li>
            ))}
            <li className="relative">
              <span aria-hidden className="absolute -left-[37px] top-2 size-2.5 rounded-full border border-dashed border-ink bg-paper ring-4 ring-paper" />
              <a href="#contato" className="text-3xl font-bold text-ink/30 transition-colors hover:text-ink">Seu projeto</a>
            </li>
          </ol>
        </aside>
      </div>
    </section>
  );
}
