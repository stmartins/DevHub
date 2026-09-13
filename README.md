# DevHub — Site vitrine

Site vitrine one-page pour présenter mes réalisations (sites web et
applications mobiles). React + Vite + TypeScript + Tailwind CSS, 100%
statique — aucun backend.

## Démarrer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

Génère un dossier `dist/` déployable tel quel sur Vercel ou Render (preset
"Vite" détecté automatiquement, aucune config supplémentaire nécessaire).

## Site bilingue (FR/EN)

Le site propose un sélecteur de langue (drapeau 🇫🇷/🇬🇧 dans le header). Tout
le texte affiché passe par ce système :

- `src/i18n/language.tsx` — contexte React (`useLanguage`) qui expose la
  langue courante et `toggleLanguage`. La langue est mémorisée dans le
  navigateur (localStorage) et devine la langue par défaut à partir du
  navigateur au premier chargement.
- `src/i18n/translations.ts` — tous les textes fixes de l'interface (nav,
  boutons, titres de section), sous la forme `{ fr: "...", en: "..." }`.
- Le contenu éditable (`profile.ts`, `projects.ts`) utilise le même format
  `{ fr, en }` pour les champs traduisibles (titre, bio, description).

## Remplacer le contenu placeholder

Tout le contenu éditable vit dans deux fichiers :

- `src/data/profile.ts` — nom, titre, bio (en `{ fr, en }`), compétences,
  liens de contact.
- `src/data/projects.ts` — liste des projets (sites web et apps mobiles),
  avec titre et description en `{ fr, en }`.

Pour chaque projet (web ou mobile) :

- `thumbnail` : image affichée en entête de la carte (capture d'écran du
  site ou de l'app), à déposer dans `public/media/` et référencer en
  `/media/nom-du-fichier.png`. Sans `thumbnail`, la carte affiche un
  placeholder "Aperçu à venir".

Pour un projet mobile :

- `demoGif` : chemin vers un GIF de démo à déposer dans `public/media/`
  (référencé ensuite en `/media/nom-du-fichier.gif`).
- `webVersionUrl` : à renseigner uniquement si le projet a une version web
  jouable en ligne.
- `githubRepo` : `{ owner, repo }` du dépôt GitHub public où sont publiées
  les releases. Le bouton "Télécharger l'APK" va chercher automatiquement le
  dernier fichier `.apk` de la dernière release à chaque chargement de page
  (via l'API GitHub, sans clé requise) — pas besoin de mettre à jour le lien
  à chaque nouvelle version.
