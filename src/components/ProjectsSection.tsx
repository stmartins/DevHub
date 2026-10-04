import { projects } from "../data/projects";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { language } = useLanguage();

  return (
    <section id="projets" aria-labelledby="projets-heading">
      <h2 id="projets-heading" className="sr-only">
        {translations.projects.heading[language]}
      </h2>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
