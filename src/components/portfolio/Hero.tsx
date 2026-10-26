import { owner } from "@/content/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="hero-motion relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="grid-backdrop absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="container-page relative grid gap-12 py-16 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="hero-copy">
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
            <Button asChild className="motion-cta h-auto px-6 py-3 text-base">
              <a href="#work">Explore My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="motion-cta h-auto border-border-strong px-6 py-3 text-base hover:bg-surface-raised hover:text-foreground"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        <aside
          aria-label="Profile"
          className="hero-profile rounded-lg border border-border bg-surface/80"
        >
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
