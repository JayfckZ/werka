import ProjectCard from "./ProjectCard";
import { projects } from "../data/site";
export default function Projects() {
  return (
    <section id="projetos" className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">Projetos que saíram do papel.</h2>
        <div className="mt-16 space-y-24 md:space-y-32">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} flip={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}
