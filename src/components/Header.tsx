import { useState } from "react";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations.nav;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#projets" className="transition-colors hover:text-ink" onClick={() => setMenuOpen(false)}>
        {t.projects[language]}
      </a>
      <a href="#a-propos" className="transition-colors hover:text-ink" onClick={() => setMenuOpen(false)}>
        {t.about[language]}
      </a>
      <a href="#contact" className="transition-colors hover:text-ink" onClick={() => setMenuOpen(false)}>
        {t.contact[language]}
      </a>
    </>
  );

  const languageSwitcher = (
    <div className="flex items-center gap-1 rounded-full border border-border p-1">
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        aria-label="Passer en français"
        className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-colors ${
          language === "fr" ? "bg-[#93c0fb] text-ink" : "text-muted hover:text-ink"
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
          language === "en" ? "bg-[#93c0fb] text-ink" : "text-muted hover:text-ink"
        }`}
      >
        <span aria-hidden="true">🇬🇧</span>
        EN
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          DevHub
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden gap-6 text-sm text-muted sm:flex">{navLinks}</nav>
          {languageSwitcher}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink sm:hidden"
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-border/60 px-4 py-4 text-sm text-muted sm:hidden">
          {navLinks}
        </nav>
      )}
    </header>
  );
}
