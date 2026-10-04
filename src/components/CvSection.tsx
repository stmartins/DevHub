import { useState } from "react";
import { cvPdfUrl, education, experiences, type CvVersion } from "../data/cv";
import { useLanguage, type Language } from "../i18n/language";
import { translations } from "../i18n/translations";

function formatMonth(date: string, language: Language): string {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString(
    language === "fr" ? "fr-FR" : "en-GB",
    { month: "short", year: "numeric" },
  );
}

export function CvSection() {
  const { language } = useLanguage();
  const t = translations.cv;
  const [version, setVersion] = useState<CvVersion>("short");

  const versionButton = (value: CvVersion, label: string) => (
    <button
      type="button"
      onClick={() => setVersion(value)}
      aria-pressed={version === value}
      className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
        version === value ? "bg-[#93c0fb] text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="cv" className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {t.heading[language]}
            </h2>
            <p className="mt-2 text-muted">{t.subheading[language]}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-border p-1">
              {versionButton("short", t.short[language])}
              {versionButton("long", t.long[language])}
            </div>
            <a
              href={cvPdfUrl(version, language)}
              download
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {t.download[language]}
            </a>
          </div>
        </div>

        <ol className="mt-10 space-y-10">
          {experiences.map((experience) => (
            <li
              key={experience.company}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-ink">
                  {experience.position[language]} ·{" "}
                  <span className="text-accent">{experience.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted">
                  {formatMonth(experience.startDate, language)} –{" "}
                  {experience.endDate
                    ? formatMonth(experience.endDate, language)
                    : t.present[language]}{" "}
                  · {experience.location}
                </p>
              </div>
              <p className="mt-3 text-sm text-muted">
                {experience.summary[language]}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink marker:text-accent">
                {experience.highlights[version][language].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
            {t.education[language]}
          </h3>
          <p className="mt-2 text-ink">
            {education.degree[language]} ·{" "}
            <span className="text-accent">{education.school}</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            {formatMonth(education.startDate, language)} –{" "}
            {formatMonth(education.endDate, language)}
          </p>
        </div>
      </div>
    </section>
  );
}
