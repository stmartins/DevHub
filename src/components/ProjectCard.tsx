import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";
import { useLatestGithubRelease } from "../hooks/useLatestGithubRelease";

// Bouton plein blanc dont le texte prend la couleur de la bande du projet.
function SolidButton({ href, color, children }: { href: string; color: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color }}
      className="rounded-full bg-white px-5 py-3.5 font-semibold transition-opacity hover:opacity-90"
    >
      {children}
    </a>
  );
}

function OutlineButton({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border-2 border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function ApkDownloadButton({
  githubRepo,
}: {
  githubRepo: NonNullable<Extract<Project, { type: "mobile" }>["githubRepo"]>;
}) {
  const { language } = useLanguage();
  const t = translations.projects;
  const { apkUrl, version, loading, error } = useLatestGithubRelease(githubRepo);

  if (loading) {
    return (
      <span className="rounded-full border-2 border-white/50 px-5 py-3 font-semibold text-white/80">
        {t.searchingRelease[language]}
      </span>
    );
  }

  if (error || !apkUrl) {
    return (
      <OutlineButton href={`https://github.com/${githubRepo.owner}/${githubRepo.repo}/releases`}>
        {t.viewReleases[language]}
      </OutlineButton>
    );
  }

  return (
    <OutlineButton href={apkUrl}>
      {`${t.downloadApk[language]}${version ? ` (${version})` : ""}`}
    </OutlineButton>
  );
}

function ProjectMedia({ project, label }: { project: Project; label: string }) {
  const { language } = useLanguage();
  const className = "aspect-video w-full rounded-3xl object-cover shadow-2xl";

  if (project.demoVideo) {
    return (
      <video
        src={project.demoVideo}
        poster={project.thumbnail}
        aria-label={label}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  const src = project.demoGif ?? project.thumbnail;
  if (src) return <img src={src} alt={label} className={className} />;

  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-3xl bg-white/10 text-white/80">
      {translations.projects.previewSoon[language]}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { language } = useLanguage();
  const t = translations.projects;
  const title = project.title[language];
  const linkUrl = project.type === "web" ? project.liveUrl : project.webVersionUrl;

  const typeLabel =
    project.type === "web"
      ? t.typeWeb[language]
      : project.webVersionUrl
        ? t.typeMobileAndWeb[language]
        : t.typeMobile[language];

  const mediaLabel =
    project.demoVideo || project.demoGif
      ? language === "fr"
        ? `Démo animée de ${title}`
        : `Animated demo of ${title}`
      : language === "fr"
        ? `Aperçu de ${title}`
        : `Preview of ${title}`;

  const media = <ProjectMedia project={project} label={mediaLabel} />;

  // Une bande sur deux met l'image à gauche, pour casser la répétition.
  const mediaFirst = index % 2 === 1;

  return (
    <article id={project.id} style={{ backgroundColor: project.color }} className="scroll-mt-20 text-white">
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:items-center lg:gap-12 lg:py-24 ${
          mediaFirst ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="min-w-0 lg:flex-1">
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white/75">
            {String(index + 1).padStart(2, "0")} — {typeLabel}
          </p>
          <h3 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
            {title}
          </h3>
          <p className="mt-5 text-lg text-white/85">{project.description[language]}</p>
          <p className="mt-4 font-semibold">{project.tags.join(" · ")}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.type === "web" && (
              <SolidButton href={project.liveUrl} color={project.color}>
                {t.viewSite[language]}
              </SolidButton>
            )}
            {project.type === "mobile" && project.webVersionUrl && (
              <SolidButton href={project.webVersionUrl} color={project.color}>
                {t.tryOnline[language]}
              </SolidButton>
            )}
            {project.type === "mobile" && project.githubRepo && (
              <ApkDownloadButton githubRepo={project.githubRepo} />
            )}
          </div>
        </div>

        <div className="min-w-0 lg:flex-1">
          {linkUrl ? (
            <a href={linkUrl} target="_blank" rel="noreferrer" className="block transition-opacity hover:opacity-90">
              {media}
            </a>
          ) : (
            media
          )}
        </div>
      </div>
    </article>
  );
}
