import { useState } from "react";
import type { Project } from "@/content/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [failed, setFailed] = useState(false);
  const host = new URL(project.url).host;

  return (
    <article data-reveal className="project-motion group flex flex-col">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} — open live demo in a new tab`}
        className="project-preview block overflow-hidden rounded-lg border border-border bg-surface"
      >
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">{host}</span>
        </div>
        <div className="aspect-[16/10] overflow-hidden">
          {failed ? (
            <div className="grid-backdrop flex h-full items-center justify-center font-display text-3xl font-bold text-muted-foreground">
              {project.name}
            </div>
          ) : (
            <img
              src={project.image}
              alt={`Screenshot of the ${project.name} homepage`}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="project-image h-full w-full object-cover object-top"
            />
          )}
        </div>
      </a>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="project-title text-2xl font-semibold">
          <span className="mr-3 font-mono text-sm text-primary">0{index + 1}</span>
          {project.name}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.category}</span>
      </div>
      <p className="mt-3 text-muted-foreground">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link mt-4 inline-flex w-fit items-center gap-2 border-b border-primary pb-0.5 text-sm font-medium transition-colors hover:text-primary"
      >
        Live Demo <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </article>
  );
}
