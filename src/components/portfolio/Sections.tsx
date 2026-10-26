import { owner, projects, steps, tools } from "@/content/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading id="work-title" index="01" eyebrow="Selected Work" title="Live projects, built from idea to deployment." />
        <p className="-mt-6 mb-12 font-mono text-xs text-muted-foreground md:-mt-10">
          Previews are screenshots of each live site.
        </p>
        <div className="reveal-stagger grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-border py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div data-reveal>
          <p className="eyebrow">02 — About</p>
          <h2 id="about-title" className="mt-4 text-3xl font-bold sm:text-5xl">
            Ideas first. Tools that help.
          </h2>
        </div>
        <div data-reveal className="space-y-5 text-lg text-muted-foreground">
          <p>
            I'm {owner.name}, based in {owner.location}. I use AI-assisted development tools to turn
            ideas into functional web experiences — booking sites, showrooms and small tools you can
            open and use today.
          </p>
          <p>
            My work is built through iterative refinement: careful prompt design, testing what comes
            back, solving the problems that appear, and repeating until the result feels right.
          </p>
          <p className="text-foreground">
            Throughout, I pay close attention to usability — clear layouts, readable content and
            flows that work on a phone as well as on a desktop.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading id="process-title" index="03" eyebrow="Process" title="Four steps, from idea to live site." />
        <ol className="reveal-stagger grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li data-reveal key={s.n} className="border-b border-border py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
              <span className="font-mono text-sm text-primary">{s.n}</span>
              <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ToolsSection() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading id="tools-title" index="04" eyebrow="Tools" title="What I work with." />
        <ul className="reveal-stagger grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => (
            <li data-reveal key={t.name} className="bg-background p-6 transition-colors hover:bg-surface">
              <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-md border border-border-strong font-mono text-sm">
                {t.mark}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.use}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Tools I use in my workflow — no affiliation or partnership implied.
        </p>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-32">
      <div className="container-page">
        <p className="eyebrow">05 — Contact</p>
        <h2 data-reveal id="contact-title" className="mt-4 max-w-4xl text-4xl font-bold sm:text-6xl">
          Have a project or an opportunity in mind? Let's talk.
        </h2>
        <div data-reveal className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          <a href={`mailto:${owner.email}`} className="group bg-background p-6 transition-colors hover:bg-surface md:p-8">
            <span className="font-mono text-xs text-muted-foreground">Email</span>
            <span className="mt-2 block break-all font-display text-xl font-semibold group-hover:text-primary sm:text-2xl">
              {owner.email}
            </span>
          </a>
          <a href={owner.phoneHref} className="group bg-background p-6 transition-colors hover:bg-surface md:p-8">
            <span className="font-mono text-xs text-muted-foreground">Phone</span>
            <span className="mt-2 block font-display text-xl font-semibold group-hover:text-primary sm:text-2xl">
              {owner.phoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-foreground">{owner.name}</p>
          <p>{owner.title}</p>
        </div>
        <a href={`mailto:${owner.email}`} className="hover:text-foreground">{owner.email}</a>
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} {owner.name}</span>
          <a href="#top" className="hover:text-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
