import { projects } from "../data/projects";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations.projects;

  return (
    <section id="projets" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">
        {t.heading[language]}
      </h2>
      <p className="mt-2 text-muted">{t.subheading[language]}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
