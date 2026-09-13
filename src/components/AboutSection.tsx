import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations.about;

  return (
    <section id="a-propos" className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          {t.heading[language]}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{profile.bio[language]}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-sm text-ink"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
