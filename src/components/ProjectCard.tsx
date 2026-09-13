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

function ProjectThumbnail({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  const { language } = useLanguage();

  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
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

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = translations.projects;
  const title = project.title[language];
  const description = project.description[language];
  const linkUrl = project.type === "web" ? project.liveUrl : project.webVersionUrl;

  const thumbnail = (
    <ProjectThumbnail
      project={project}
      label={language === "fr" ? `Aperçu de ${title}` : `Preview of ${title}`}
    />
  );

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      {linkUrl ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noreferrer"
          className="block aspect-video w-full border-b border-border transition-opacity hover:opacity-90"
        >
          {thumbnail}
        </a>
      ) : (
        <div className="aspect-video w-full border-b border-border">
          {thumbnail}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted">
            {project.type === "web" ? t.typeWeb[language] : t.typeMobile[language]}
          </span>
        </div>

        {project.demoGif && (
          <img
            src={project.demoGif}
            alt={language === "fr" ? `Démo animée de ${title}` : `Animated demo of ${title}`}
            className="mx-auto mt-4 h-72 w-auto rounded-xl border border-border"
          />
        )}

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
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
