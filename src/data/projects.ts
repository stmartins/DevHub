import type { Localized } from "../i18n/language";

export type BaseProject = {
  id: string;
  title: Localized;
  description: Localized;
  tags: string[];
  thumbnail?: string;
};

export type WebProject = BaseProject & {
  type: "web";
  liveUrl: string;
};

export type MobileProject = BaseProject & {
  type: "mobile";
  demoGif?: string;
  webVersionUrl?: string;
  githubRepo?: { owner: string; repo: string };
};

export type Project = WebProject | MobileProject;

// Contenu placeholder — remplace ces entrées par tes vraies réalisations.
export const projects: Project[] = [
  {
    id: "save-my-print",
    type: "web",
    title: { fr: "Save My Print", en: "Save My Print" },
    description: {
      fr: "Quand une cartouche d'imprimante est vide, impossible d'imprimer normalement. Save My Print corrige la couleur manquante (cyan, magenta, jaune ou noir) directement sur le document pour pouvoir quand même l'imprimer.",
      en: "When a printer cartridge runs dry, you can't print normally anymore. Save My Print fixes the missing ink color (cyan, magenta, yellow or black) directly on the document so you can still print it.",
    },
    tags: ["Nuxt", "Vue.js"],
    liveUrl: "https://save-my-print.vercel.app/change-colors",
    thumbnail: "/media/save-my-print-thumb.png",
  },
  {
    id: "web-project-2",
    type: "web",
    title: { fr: "Projet Web #2", en: "Web Project #2" },
    description: {
      fr: "[Description courte du deuxième site que tu as réalisé.]",
      en: "[Short description of your second website.]",
    },
    tags: ["Next.js", "Tailwind"],
    liveUrl: "#",
    thumbnail: "/media/web-project-2-thumb.svg",
  },
  {
    id: "mobile-project-1",
    type: "mobile",
    title: { fr: "App Mobile #1 (Flutter)", en: "Mobile App #1 (Flutter)" },
    description: {
      fr: "[Décris l'app Flutter, ses fonctionnalités clés, et pourquoi elle n'est pas encore sur le Play Store.]",
      en: "[Describe the Flutter app, its key features, and why it isn't on the Play Store yet.]",
    },
    tags: ["Flutter", "Dart"],
    thumbnail: "/media/mobile-project-1-thumb.svg",
    demoGif: "/media/mobile-project-1-demo.gif",
    githubRepo: { owner: "[ton-pseudo]", repo: "[nom-du-repo]" },
  },
  {
    id: "mobile-project-2",
    type: "mobile",
    title: { fr: "App Mobile #2", en: "Mobile App #2" },
    description: {
      fr: "[Décris cette app — celle qui a aussi une version web à essayer directement en ligne.]",
      en: "[Describe this app — the one that also has a web version to try online.]",
    },
    tags: ["Flutter", "Firebase"],
    thumbnail: "/media/mobile-project-2-thumb.svg",
    demoGif: "/media/mobile-project-2-demo.gif",
    webVersionUrl: "#",
  },
];
