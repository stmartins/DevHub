import { useState } from "react";
import { useLanguage, type Language } from "../i18n/language";
import { translations } from "../i18n/translations";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations.nav;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#projets" className="hover:underline" onClick={() => setMenuOpen(false)}>
        {t.projects[language]}
      </a>
      <a href="#cv" className="hover:underline" onClick={() => setMenuOpen(false)}>
        {t.cv[language]}
      </a>
      <a href="#contact" className="hover:underline" onClick={() => setMenuOpen(false)}>
        {t.contact[language]}
      </a>
    </>
  );

  const languageButton = (value: Language, label: string, ariaLabel: string) => (
    <button
      type="button"
      onClick={() => setLanguage(value)}
      aria-pressed={language === value}
      aria-label={ariaLabel}
      className={`min-h-10 rounded-full px-3 text-sm font-semibold transition-colors ${
        language === value ? "bg-white text-ink" : "text-white/75 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#top" className="font-display text-2xl font-extrabold">
          DevHub
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden gap-6 font-semibold sm:flex">{navLinks}</nav>
          <div className="flex items-center gap-1 rounded-full bg-ink p-1">
            {languageButton("fr", "FR", t.switchToFrench[language])}
            {languageButton("en", "EN", t.switchToEnglish[language])}
          </div>
          <div className="relative sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink"
            >
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
            {menuOpen && (
              <nav className="absolute right-0 top-full mt-2 flex w-44 flex-col gap-4 rounded-2xl border-2 border-ink bg-background p-5 font-semibold shadow-lg">
                {navLinks}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
