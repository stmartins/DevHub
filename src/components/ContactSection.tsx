import { profile } from "../data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">
        Contact
      </h2>
      <p className="mt-2 max-w-xl text-muted">
        Une idée de projet, une question, ou juste envie d'échanger ? N'hésite
        pas à me contacter.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.contact.email}`}
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {profile.contact.email}
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          GitHub
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
