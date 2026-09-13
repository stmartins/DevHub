import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations.nav;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          DevHub
        </a>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-muted">
            <a href="#projets" className="transition-colors hover:text-ink">
              {t.projects[language]}
            </a>
            <a href="#a-propos" className="transition-colors hover:text-ink">
              {t.about[language]}
            </a>
            <a href="#contact" className="transition-colors hover:text-ink">
              {t.contact[language]}
            </a>
          </nav>
          <div className="flex items-center gap-1 rounded-full border border-border p-1">
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              aria-pressed={language === "fr"}
              aria-label="Passer en français"
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                language === "fr"
                  ? "bg-[#93c0fb] text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              <span aria-hidden="true">🇫🇷</span>
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              aria-label="Switch to English"
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                language === "en"
                  ? "bg-[#93c0fb] text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              <span aria-hidden="true">🇬🇧</span>
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
