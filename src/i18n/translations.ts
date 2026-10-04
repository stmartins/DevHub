export const translations = {
  nav: {
    projects: { fr: "Projets", en: "Projects" },
    cv: { fr: "CV", en: "Resume" },
    contact: { fr: "Contact", en: "Contact" },
    switchToFrench: { fr: "Passer en français", en: "Switch to French" },
    switchToEnglish: { fr: "Passer en anglais", en: "Switch to English" },
  },
  hero: {
    jumpTo: { fr: "Aller au projet", en: "Jump to project" },
  },
  projects: {
    heading: { fr: "Projets", en: "Projects" },
    typeWeb: { fr: "Site web", en: "Website" },
    typeMobile: { fr: "App mobile", en: "Mobile app" },
    typeMobileAndWeb: { fr: "App mobile + web", en: "Mobile app + web" },
    viewSite: { fr: "Voir le site ↗", en: "View site ↗" },
    tryOnline: { fr: "Essayer en ligne ↗", en: "Try it online ↗" },
    searchingRelease: {
      fr: "Recherche de la dernière version…",
      en: "Looking up the latest version…",
    },
    viewReleases: {
      fr: "Voir les releases GitHub",
      en: "View GitHub releases",
    },
    downloadApk: { fr: "Télécharger l'APK ↓", en: "Download APK ↓" },
    previewSoon: { fr: "Aperçu à venir", en: "Preview coming soon" },
  },
  cv: {
    heading: { fr: "Parcours", en: "Experience" },
    showShort: { fr: "Résumé", en: "Summary" },
    showLong: { fr: "Détaillé", en: "Detailed" },
    shownVersion: { fr: "Affichage", en: "Show" },
    downloadHeading: { fr: "Télécharger mon CV", en: "Download my resume" },
    short: { fr: "Court", en: "Short" },
    long: { fr: "Détaillé", en: "Detailed" },
    french: { fr: "Français", en: "French" },
    english: { fr: "Anglais", en: "English" },
    present: { fr: "auj.", en: "now" },
    education: { fr: "Formation", en: "Education" },
    stack: { fr: "Stack", en: "Stack" },
  },
  contact: {
    heading: { fr: "Parlons-en.", en: "Let's talk." },
    subheading: {
      fr: "Une idée de projet, une question, ou juste envie d'échanger ? N'hésite pas à me contacter.",
      en: "A project idea, a question, or just want to say hi? Feel free to reach out.",
    },
  },
  footer: {
    tagline: { fr: "Fait avec React & Tailwind.", en: "Built with React & Tailwind." },
  },
} as const;
