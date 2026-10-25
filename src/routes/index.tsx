import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import {
  AboutSection,
  ContactSection,
  ProcessSection,
  SiteFooter,
  ToolsSection,
  WorkSection,
} from "@/components/portfolio/Sections";

const title = "Andro Fady | AI-Assisted Web Developer";
const description =
  "Portfolio of Andro Fady, an AI-assisted web developer in El Mahalla El Kubra, Egypt. Live projects, process and contact details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <WorkSection />
        <AboutSection />
        <ProcessSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
