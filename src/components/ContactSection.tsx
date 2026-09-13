import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations.contact;

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">
        {t.heading[language]}
      </h2>
      <p className="mt-2 max-w-xl text-muted">{t.subheading[language]}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.contact.email}`}
          className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <MailIcon className="h-4 w-4" />
          {profile.contact.email}
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
