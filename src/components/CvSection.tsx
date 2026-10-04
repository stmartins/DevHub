import { useState } from "react";
import { cvPdfUrl, education, experiences, type CvVersion } from "../data/cv";
import { profile } from "../data/profile";
import { useLanguage, type Language } from "../i18n/language";
import { translations } from "../i18n/translations";

function formatMonth(date: string, language: Language): string {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString(
    language === "fr" ? "fr-FR" : "en-GB",
    { month: "short", year: "numeric" },
  );
}

const CV_VERSIONS: CvVersion[] = ["short", "long"];
const CV_LANGUAGES: Language[] = ["fr", "en"];

function CvDownloads() {
  const { language } = useLanguage();
  const t = translations.cv;

  return (
    <div className="rounded-3xl bg-ink p-6 text-white sm:p-8">
      <h3 className="font-display text-2xl font-bold">{t.downloadHeading[language]}</h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {CV_VERSIONS.flatMap((version) =>
          CV_LANGUAGES.map((cvLanguage) => (
            <a
              key={`${version}-${cvLanguage}`}
              href={cvPdfUrl(version, cvLanguage)}
              download
              className="flex items-center justify-between gap-3 rounded-2xl border-2 border-white/25 px-5 py-4 font-semibold transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              <span>
                CV {t[version][language].toLowerCase()} ·{" "}
                {(cvLanguage === "fr" ? t.french : t.english)[language]}
              </span>
              <span aria-hidden="true">PDF ↓</span>
            </a>
          )),
        )}
      </div>
    </div>
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
      className={`min-h-10 rounded-full px-4 text-sm font-semibold transition-colors ${
        version === value ? "bg-ink text-white" : "text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="cv" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-16 pt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-7xl">
          {t.heading[language]}
        </h2>
        <div
          role="group"
          aria-label={t.shownVersion[language]}
          className="flex items-center gap-1 rounded-full border-2 border-ink p-1"
        >
          {versionButton("short", t.showShort[language])}
          {versionButton("long", t.showLong[language])}
        </div>
      </div>

      <ol className="mt-10">
        {experiences.map((experience) => (
          <li
            key={experience.company}
            className="flex flex-wrap gap-x-8 gap-y-2 border-t-2 border-ink py-8"
          >
            <p className="flex-[0_0_12rem] font-display text-xl font-bold">
              {formatMonth(experience.startDate, language)} →{" "}
              {experience.endDate ? formatMonth(experience.endDate, language) : t.present[language]}
            </p>
            <div className="min-w-0 flex-[1_1_26rem]">
              <h3 className="font-display text-3xl font-bold">{experience.company}</h3>
              <p className="mt-1 font-semibold">
                {experience.position[language]} · {experience.location}
              </p>
              <p className="mt-3 text-muted">{experience.summary[language]}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-ink">
                {experience.highlights[version][language].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="flex flex-wrap gap-x-8 gap-y-2 border-y-2 border-ink py-8">
          <p className="flex-[0_0_12rem] font-display text-xl font-bold">
            {formatMonth(education.startDate, language)} → {formatMonth(education.endDate, language)}
          </p>
          <div className="min-w-0 flex-[1_1_26rem]">
            <h3 className="font-display text-3xl font-bold">{education.school}</h3>
            <p className="mt-1 font-semibold">
              {t.education[language]} · {education.degree[language]}
            </p>
          </div>
        </li>
      </ol>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="rounded-3xl border-2 border-ink p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">{t.stack[language]}</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span key={skill} className="rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <CvDownloads />
      </div>
    </section>
  );
}
