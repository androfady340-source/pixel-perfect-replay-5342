import { useEffect, useState } from "react";
import { navItems } from "@/content/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-base font-bold tracking-[0.14em]">
          ANDRO FADY
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="motion-cta hidden sm:inline-flex">
            <a href="#contact">Let's talk</a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-foreground transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-foreground transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </Button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
        data-open={open}
        className="mobile-menu bg-background md:hidden"
      >
        <div className="mobile-menu-inner">
          <ul className="container-page flex flex-col border-t border-border py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="nav-link block w-fit py-3 font-display text-2xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
