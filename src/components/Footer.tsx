import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} —{" "}
        {translations.footer.tagline[language]}
      </div>
    </footer>
  );
}
