import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations.contact;

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-28 pt-16">
      <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-8xl">
        {t.heading[language]}
      </h2>
      <p className="mt-5 max-w-xl text-lg text-muted">{t.subheading[language]}</p>

      <div className="mt-8 flex flex-wrap gap-3 font-semibold">
        <a
          href={`mailto:${profile.contact.email}`}
          className="flex items-center gap-2 break-all rounded-full bg-ink px-5 py-3.5 text-white transition-opacity hover:opacity-85"
        >
          <MailIcon className="h-4 w-4 shrink-0" />
          {profile.contact.email}
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border-2 border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-white"
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border-2 border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-white"
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
