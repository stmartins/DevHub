import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t-2 border-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 py-8 text-sm font-medium">
        <span className="font-display font-bold">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="text-muted">{translations.footer.tagline[language]}</span>
      </div>
    </footer>
  );
}
