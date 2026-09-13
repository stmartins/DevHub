import { useEffect, useState } from "react";

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type ReleaseState = {
  apkUrl: string | null;
  version: string | null;
  loading: boolean;
  error: boolean;
};

export function useLatestGithubRelease(
  githubRepo?: { owner: string; repo: string },
): ReleaseState {
  const [state, setState] = useState<ReleaseState>({
    apkUrl: null,
    version: null,
    loading: Boolean(githubRepo),
    error: false,
  });

  useEffect(() => {
    if (!githubRepo) return;
    const { owner, repo } = githubRepo;
    let cancelled = false;

    fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data: { tag_name: string; assets: ReleaseAsset[] }) => {
        if (cancelled) return;
        const apkAsset = data.assets?.find((asset) =>
          asset.name.toLowerCase().endsWith(".apk"),
        );
        setState({
          apkUrl: apkAsset?.browser_download_url ?? null,
          version: data.tag_name ?? null,
          loading: false,
          error: !apkAsset,
        });
      })
      .catch(() => {
        if (cancelled) return;
        setState({ apkUrl: null, version: null, loading: false, error: true });
      });

    return () => {
      cancelled = true;
    };
  }, [githubRepo?.owner, githubRepo?.repo]);

  return state;
}
