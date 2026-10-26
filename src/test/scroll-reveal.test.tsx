import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function Fixture() {
  const ref = useScrollReveal();
  return (
    <main ref={ref}>
      <div data-reveal>
        <a href="#work">Work</a>
      </div>
    </main>
  );
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function setup(reduced = false) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({ matches: reduced, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
  );
  let callback: IntersectionObserverCallback | undefined;
  const unobserve = vi.fn();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(cb: IntersectionObserverCallback) {
        callback = cb;
      }
      observe = vi.fn();
      unobserve = unobserve;
      disconnect = vi.fn();
    },
  );
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
    top: 3000,
  } as DOMRect);
  return {
    unobserve,
    enter: (target: Element) =>
      callback?.(
        [{ target, isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      ),
  };
}

describe("accessible scroll reveals", () => {
  it("reveals once when entering the viewport", () => {
    const { enter, unobserve } = setup();
    const { container } = render(<Fixture />);
    const target = container.querySelector("[data-reveal]");
    if (!target) throw new Error("Missing reveal target");
    expect(target.classList.contains("reveal-pending")).toBe(true);
    act(() => enter(target));
    expect(target.classList.contains("reveal-pending")).toBe(false);
    expect(target.getAttribute("data-revealed")).toBe("true");
    expect(unobserve).toHaveBeenCalledWith(target);
  });

  it("never hides content when reduced motion is requested", () => {
    setup(true);
    const { container } = render(<Fixture />);
    expect(container.querySelectorAll(".reveal-pending").length).toBe(0);
  });

  it("reveals offscreen content when its link gets keyboard focus", () => {
    setup();
    const { container, getByRole } = render(<Fixture />);
    expect(container.querySelectorAll(".reveal-pending").length).toBe(1);
    act(() => getByRole("link").focus());
    expect(container.querySelectorAll(".reveal-pending").length).toBe(0);
  });
});
