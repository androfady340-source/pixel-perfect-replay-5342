import { useEffect, useRef } from "react";

/** Progressive enhancement: content stays visible without JS or observer support. */
export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    const configure = () => {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending"));
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("reveal-pending");
            entry.target.setAttribute("data-revealed", "true");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );
      elements.forEach((element) => {
        // Never hide content already on screen or previously revealed.
        if (element.dataset.revealed || element.getBoundingClientRect().top < window.innerHeight) return;
        element.classList.add("reveal-pending");
        observer?.observe(element);
      });
    };

    configure();
    preference.addEventListener("change", configure);
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      const element = event.target.closest<HTMLElement>("[data-reveal]");
      if (!element) return;
      element.classList.remove("reveal-pending");
      element.dataset.revealed = "true";
      observer?.unobserve(element);
    };
    root.addEventListener("focusin", revealFocused);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      root.removeEventListener("focusin", revealFocused);
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    };
  }, []);

  return ref;
}