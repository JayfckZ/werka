import Image from "next/image";
import Reveal from "./Reveal";
import type { Project } from "../data/site";
const rows = [["Problema", "problem"], ["Solução", "solution"], ["Resultado", "result"]] as const;
export default function ProjectCard({ p, flip }: { p: Project; flip?: boolean }) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <div className="group relative overflow-hidden border border-white/10 bg-white/[0.03]">
          <span aria-hidden className="absolute inset-x-0 top-0 z-10 h-px bg-principal" />
          <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
            {[0, 1, 2].map((k) => <span key={k} className="size-2 rounded-full bg-white/20" />)}
          </div>
          <div className="relative aspect-[16/10]">
            {p.image ? (
              <Image src={p.image} alt={`Tela do sistema ${p.name}`} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
            ) : (
              <div className="grid-tech dark absolute inset-0 grid place-items-center font-mono text-xs text-white/40">{`public/projects/${p.slug}.png`}</div>
            )}
          </div>
        </div>
      </Reveal>
      <div className="lg:col-span-5">
        <h3 className="text-4xl font-bold tracking-tight md:text-6xl">{p.name}</h3>
        <p className="mt-2 font-mono text-xs text-white/50">{p.category}</p>
        <p className="mt-6 text-white/70">{p.summary}</p>
        <dl className="mt-8 space-y-5">
          {rows.map(([l, k]) => (
            <div key={k} className="border-l-2 pl-4" style={{ borderColor: k === "result" ? p.accent : "rgba(255,255,255,.15)" }}>
              <dt className="font-mono text-xs uppercase text-white/50">{l}</dt>
              <dd className="mt-1 text-white/85">{p[k]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 font-mono text-xs text-white/40">{p.stack.join(" · ")}</p>
      </div>
    </article>
  );
}
