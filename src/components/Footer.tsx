import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} — Fait avec React & Tailwind.
      </div>
    </footer>
  );
}
