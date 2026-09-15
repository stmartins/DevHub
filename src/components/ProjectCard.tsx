import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/language";
import { translations } from "../i18n/translations";
import { useLatestGithubRelease } from "../hooks/useLatestGithubRelease";

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
        >
          {tag}
        </span>
      ))}
    </div>
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
      <span className="rounded-full border border-border px-4 py-2 text-sm text-muted">
        {t.searchingRelease[language]}
      </span>
    );
  }

  if (error || !apkUrl) {
    return (
      <a
        href={`https://github.com/${githubRepo.owner}/${githubRepo.repo}/releases`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
      >
        {t.viewReleases[language]}
      </a>
    );
  }

  return (
    <a
      href={apkUrl}
      className="rounded-full border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
    >
      {t.downloadApk[language]}
      {version ? ` (${version})` : ""}
    </a>
  );
}

function ProjectMedia({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  const { language } = useLanguage();
  const src = project.demoGif ?? project.thumbnail;

  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-accent-soft text-sm text-muted">
      {translations.projects.previewSoon[language]}
    </div>
  );
}

function PhoneFrameMedia({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-accent-soft/40 py-6">
      <div className="relative aspect-[9/19] h-72 overflow-hidden rounded-[1.75rem] border-4 border-ink bg-black shadow-lg">
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = translations.projects;
  const title = project.title[language];
  const description = project.description[language];
  const linkUrl = project.type === "web" ? project.liveUrl : project.webVersionUrl;

  const mediaLabel = project.demoGif
    ? language === "fr"
      ? `Démo animée de ${title}`
      : `Animated demo of ${title}`
    : language === "fr"
      ? `Aperçu de ${title}`
      : `Preview of ${title}`;

  // Sur mobile, le gif est un enregistrement d'écran portrait : on le
  // cadre dans un mockup de téléphone plutôt que de l'étirer en plein écran.
  const isPhoneDemo = project.type === "mobile" && Boolean(project.demoGif);

  const media = isPhoneDemo ? (
    <PhoneFrameMedia src={project.demoGif!} label={mediaLabel} />
  ) : (
    <ProjectMedia project={project} label={mediaLabel} />
  );

  const mediaWrapperClass = isPhoneDemo
    ? "mt-4 w-full border-y border-border transition-opacity hover:opacity-90"
    : "mt-4 block aspect-video w-full border-y border-border transition-opacity hover:opacity-90";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-start justify-between gap-4 p-6 pb-0">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted">
          {project.type === "web" ? t.typeWeb[language] : t.typeMobile[language]}
        </span>
      </div>

      {linkUrl ? (
        <a href={linkUrl} target="_blank" rel="noreferrer" className={mediaWrapperClass}>
          {media}
        </a>
      ) : (
        <div className={mediaWrapperClass}>{media}</div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ProjectTags tags={project.tags} />

        <div className="mt-6 flex flex-wrap gap-3">
          {project.type === "web" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t.viewSite[language]}
            </a>
          )}

          {project.type === "mobile" && project.webVersionUrl && (
            <a
              href={project.webVersionUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t.tryOnline[language]}
            </a>
          )}

          {project.type === "mobile" && project.githubRepo && (
            <ApkDownloadButton githubRepo={project.githubRepo} />
          )}
        </div>
      </div>
    </article>
  );
}
