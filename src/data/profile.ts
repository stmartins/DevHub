import type { Localized } from "../i18n/language";

export const profile = {
  name: "Stéphane Martins",
  title: { fr: "Développeur", en: "Developer" } satisfies Localized,
  bio: {
    fr: "Je code sur tous les fronts — web, back-end et mobile. Ce que j'aime, c'est créer, trouver des solutions, et voir le résultat concret de mon travail.",
    en: "I code across the whole stack — web, back-end and mobile. What I love is building things, solving problems, and seeing the real result of my work.",
  } satisfies Localized,
  location: "Vaires-sur-Marne, France",
  skills: ["Go", "Vue.js", "Nuxt", "Elasticsearch", "PostgreSQL"],
  contact: {
    email: "stephanemartins.dev@gmail.com",
    github: "https://github.com/stmartins",
    linkedin: "https://www.linkedin.com/in/st%C3%A9phane-m-a234a911a/",
  },
};
