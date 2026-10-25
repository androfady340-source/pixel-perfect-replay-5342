import { owner } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-page relative grid gap-12 py-16 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">AI-Assisted Web Development</p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-bold sm:text-6xl lg:text-7xl">
            Turning Ideas Into
            <br />
            <span className="text-muted-foreground">Digital Experiences</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{owner.tagline}</p>
          <p className="mt-3 max-w-xl text-muted-foreground">
            I design and build websites with AI-assisted workflows — from a rough idea to a live,
            tested site.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border-strong px-6 py-3 font-medium transition-colors hover:bg-surface-raised"
            >
              Contact Me
            </a>
          </div>
        </div>

        <aside aria-label="Profile" className="rounded-lg border border-border bg-surface/80">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs text-muted-foreground">profile</span>
          </div>
          <dl className="divide-y divide-border">
            <div className="px-5 py-4">
              <dt className="font-mono text-xs text-muted-foreground">Name</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">{owner.name}</dd>
            </div>
            <div className="px-5 py-4">
              <dt className="font-mono text-xs text-muted-foreground">Role</dt>
              <dd className="mt-1">{owner.title}</dd>
            </div>
            <div className="px-5 py-4">
              <dt className="font-mono text-xs text-muted-foreground">Based in</dt>
              <dd className="mt-1">{owner.location}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
