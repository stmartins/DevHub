import { profile } from "../data/profile";

export function AboutSection() {
  return (
    <section id="a-propos" className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          À propos
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{profile.bio}</p>

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
