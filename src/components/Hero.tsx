import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";

export function Hero() {
  const { language } = useLanguage();
  const [firstName, ...lastName] = profile.name.split(" ");

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-20">
      <h1 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tighter sm:text-8xl lg:text-[8rem]">
        {firstName}
        <br />
        {lastName.join(" ")}
      </h1>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <span className="rounded-full bg-ink px-5 py-2.5 font-display text-lg font-bold text-white sm:text-xl">
          {profile.title[language]}
        </span>
        <p className="min-w-0 flex-[1_1_22rem] text-lg text-muted">{profile.bio[language]}</p>
      </div>

      <nav aria-label={translations.hero.jumpTo[language]} className="mt-10 flex flex-wrap gap-2.5">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            style={{ backgroundColor: project.color }}
            className="rounded-full px-4 py-2.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {project.title[language]}
          </a>
        ))}
      </nav>
    </section>
  );
}
