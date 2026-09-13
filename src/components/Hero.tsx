import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-24">
      <p className="mb-4 font-mono text-sm text-accent">{t.eyebrow[language]}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-muted">{profile.title[language]}</p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        {profile.bio[language]}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projets"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {t.ctaProjects[language]}
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          {t.ctaContact[language]}
        </a>
      </div>
    </section>
  );
}
