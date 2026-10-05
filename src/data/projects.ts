import type { Localized } from "../i18n/language";

export type BaseProject = {
  id: string;
  title: Localized;
  description: Localized;
  tags: string[];
  // Couleur de fond de la bande du projet (texte blanc par-dessus : garder un
  // contraste d'au moins 4.5:1).
  color: string;
  thumbnail?: string;
  demoGif?: string;
  // Vidéo de démo (mp4/webm), prioritaire sur le gif quand elle est définie.
  demoVideo?: string;
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

export const projects: Project[] = [
  {
    id: "save-my-print",
    color: "#b4400f",
    type: "web",
    title: { fr: "Save My Print", en: "Save My Print" },
    description: {
      fr: "Quand une cartouche d'imprimante est vide, impossible d'imprimer normalement. Save My Print corrige la couleur manquante (cyan, magenta, jaune ou noir) directement sur le document pour pouvoir quand même l'imprimer.",
      en: "When a printer cartridge runs dry, you can't print normally anymore. Save My Print fixes the missing ink color (cyan, magenta, yellow or black) directly on the document so you can still print it.",
    },
    tags: ["Nuxt", "Vue.js"],
    liveUrl: "https://save-my-print.vercel.app/change-colors",
    thumbnail: "/media/save-my-print-thumb.png",
    demoVideo: "/media/save-my-print-demo.mp4",
  },
  {
    id: "fast-market-list",
    color: "#6d28d9",
    type: "web",
    title: { fr: "Fast Market List", en: "Fast Market List" },
    description: {
      fr: "Constructeur de liste de courses : recherche des produits dans un catalogue de supermarché, chaque recherche sur sa propre ligne, les ajoute à un panier avec quantités et calcule le total en temps réel.",
      en: "Shopping list builder: search products in a supermarket catalog, each search on its own row, add them to a cart with quantities, and see the running total in real time.",
    },
    tags: ["Nuxt", "Vue.js"],
    liveUrl: "https://fast-market-list.vercel.app/",
    thumbnail: "/media/fast-market-list-thumb.jpg",
    demoVideo: "/media/fast-market-list-demo.mp4",
  },
  {
    id: "myclan",
    color: "#FF5C39",
    type: "mobile",
    title: { fr: "MyClan", en: "MyClan" },
    description: {
      fr: "Application familiale de localisation en temps réel (anciennement Family Tracker) : carte partagée, fiche et parcours de chaque membre, rendez-vous immédiats ou planifiés avec rappel, alertes SOS et messagerie. App Android en Kotlin / Jetpack Compose, version web en React, API en Go. En français et en anglais.",
      en: "Real-time family location app (formerly Family Tracker): shared map, each member's profile and trips, immediate or scheduled meetups with reminders, SOS alerts and messaging. Android app in Kotlin / Jetpack Compose, React web version, Go API. In French and English.",
    },
    tags: ["Kotlin", "Jetpack Compose", "React", "Go"],
    thumbnail: "/media/myclan-thumb.jpg",
    demoVideo: "/media/myclan-demo.mp4",
    webVersionUrl: "https://family-tracker-web-z4ur.onrender.com/",
  },
  {
    id: "pdfland",
    color: "#065f46",
    type: "mobile",
    title: { fr: "PDFland", en: "PDFland" },
    description: {
      fr: "Éditer des PDF sur Android ou dans le navigateur : signer, modifier ou ajouter du texte, fusionner, organiser les pages, compresser et convertir des photos en PDF. Sur Android, tout se fait sur le téléphone, hors ligne, et on peut aussi scanner un document papier avec l'appareil photo. App en Flutter, version web en React, même moteur PDF en Go (pdfcpu) : embarqué via dart:ffi dans l'app, servi par une API pour le web.",
      en: "Edit PDFs on Android or in the browser: sign, edit or add text, merge, reorder pages, compress and turn photos into PDFs. On Android everything runs on the phone, offline, and you can also scan paper documents with the camera. Flutter app, React web version, same Go PDF engine (pdfcpu): embedded through dart:ffi in the app, served by an API for the web.",
    },
    tags: ["Flutter", "React", "Go"],
    thumbnail: "/media/pdfland-thumb.jpg",
    demoVideo: "/media/pdfland-demo.mp4",
    webVersionUrl: "https://pdfland-web.onrender.com/",
  },
];
