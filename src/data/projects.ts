export type BaseProject = {
  id: string;
  title: string;
  description: string;
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
    id: "web-project-1",
    type: "web",
    title: "Projet Web #1",
    description:
      "[Décris ce projet : le problème résolu, ton rôle, ce qui le rend intéressant.]",
    tags: ["React", "TypeScript"],
    liveUrl: "#",
    thumbnail: "/media/web-project-1-thumb.svg",
  },
  {
    id: "web-project-2",
    type: "web",
    title: "Projet Web #2",
    description: "[Description courte du deuxième site que tu as réalisé.]",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "#",
    thumbnail: "/media/web-project-2-thumb.svg",
  },
  {
    id: "mobile-project-1",
    type: "mobile",
    title: "App Mobile #1 (Flutter)",
    description:
      "[Décris l'app Flutter, ses fonctionnalités clés, et pourquoi elle n'est pas encore sur le Play Store.]",
    tags: ["Flutter", "Dart"],
    thumbnail: "/media/mobile-project-1-thumb.svg",
    demoGif: "/media/mobile-project-1-demo.gif",
    githubRepo: { owner: "[ton-pseudo]", repo: "[nom-du-repo]" },
  },
  {
    id: "mobile-project-2",
    type: "mobile",
    title: "App Mobile #2",
    description:
      "[Décris cette app — celle qui a aussi une version web à essayer directement en ligne.]",
    tags: ["Flutter", "Firebase"],
    thumbnail: "/media/mobile-project-2-thumb.svg",
    demoGif: "/media/mobile-project-2-demo.gif",
    webVersionUrl: "#",
  },
];
