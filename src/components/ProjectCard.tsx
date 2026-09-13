import type { Project } from "../data/projects";
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
  const { apkUrl, version, loading, error } = useLatestGithubRelease(githubRepo);

  if (loading) {
    return (
      <span className="rounded-full border border-border px-4 py-2 text-sm text-muted">
        Recherche de la dernière version…
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
        Voir les releases GitHub
      </a>
    );
  }

  return (
    <a
      href={apkUrl}
      className="rounded-full border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
    >
      Télécharger l'APK{version ? ` (${version})` : ""}
    </a>
  );
}

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={`Aperçu de ${project.title}`}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-accent-soft text-sm text-muted">
      Aperçu à venir
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="aspect-video w-full border-b border-border">
        <ProjectThumbnail project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted">
            {project.type === "web" ? "Site web" : "App mobile"}
          </span>
        </div>

        {project.type === "mobile" && project.demoGif && (
          <img
            src={project.demoGif}
            alt={`Démo animée de ${project.title}`}
            className="mx-auto mt-4 h-72 w-auto rounded-xl border border-border"
          />
        )}

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
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
              Voir le site ↗
            </a>
          )}

          {project.type === "mobile" && project.webVersionUrl && (
            <a
              href={project.webVersionUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Essayer en ligne ↗
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
