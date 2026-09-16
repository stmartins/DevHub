import type { Localized } from "../i18n/language";

export type BaseProject = {
  id: string;
  title: Localized;
  description: Localized;
  tags: string[];
  thumbnail?: string;
  demoGif?: string;
};

export type WebProject = BaseProject & {
  type: "web";
  liveUrl: string;
};

export type MobileProject = BaseProject & {
  type: "mobile";
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
    demoGif: "/media/save-my-print-demo.gif",
  },
  {
    id: "fast-market-list",
    type: "web",
    title: { fr: "Fast Market List", en: "Fast Market List" },
    description: {
      fr: "Constructeur de liste de courses : recherche des produits (texte ou dictée vocale transcrite via Whisper) dans un catalogue de supermarché, les ajoute à un panier avec quantités et calcule le total en temps réel.",
      en: "Shopping list builder: search products (typed or by voice, transcribed via Whisper) in a supermarket catalog, add them to a cart with quantities, and see the running total in real time.",
    },
    tags: ["Nuxt", "Vue.js"],
    liveUrl: "#",
    demoGif: "/media/fast-market-list.gif",
  },
  {
    id: "family-tracker",
    type: "mobile",
    title: { fr: "Family Tracker", en: "Family Tracker" },
    description: {
      fr: "Application de suivi de position familiale en temps réel : carte partagée entre les membres du groupe, historique des trajets, points de rendez-vous, alertes d'urgence et messagerie privée. App Android en Kotlin / Jetpack Compose, API en Go.",
      en: "Real-time family location tracking app: shared map between group members, trip history, meetup points, emergency alerts and private messaging. Android app in Kotlin / Jetpack Compose, API in Go.",
    },
    tags: ["Kotlin", "Jetpack Compose", "Go"],
    thumbnail: "/media/family-tracker-thumb.jpg",
    demoGif: "/media/family-tracker-demo.gif",
    webVersionUrl: "https://family-tracker-web-z4ur.onrender.com/",
  },
  {
    id: "pdfland",
    type: "mobile",
    title: { fr: "PDFland", en: "PDFland" },
    description: {
      fr: "Application mobile pour éditer des PDF en déplacement : importer un fichier, y apposer une signature manuscrite, ajouter du texte libre et masquer/réécrire du texte existant, le tout appliqué en une seule fois via un backend Go dédié. App en Flutter, API en Go avec pdfcpu.",
      en: "Mobile app for editing PDFs on the go: import a file, apply a handwritten signature, add free text and cover/rewrite existing text, all applied at once through a dedicated Go backend. App in Flutter, API in Go with pdfcpu.",
    },
    tags: ["Flutter", "Go"],
    demoGif: "/media/pdfland-demo.gif",
  },
];
