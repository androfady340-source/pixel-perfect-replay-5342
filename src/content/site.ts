import malabak from "@/assets/projects/malabak.webp";
import noir from "@/assets/projects/noir.webp";
import shifaa from "@/assets/projects/shifaa.webp";
import fixflow from "@/assets/projects/fixflow.webp";

export const owner = {
  name: "Andro Fady",
  title: "AI-Assisted Web Developer | Vibe Coder",
  tagline: "Building web experiences from ideas with AI-assisted development.",
  location: "El Mahalla El Kubra, Egypt",
  email: "androfady340@gmail.com",
  phoneDisplay: "+20 120 874 4830",
  phoneHref: "tel:+201208744830",
} as const;

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: readonly NavItem[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "tools", label: "Tools" },
  { id: "contact", label: "Contact" },
];

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
}

export const projects: readonly Project[] = [
  {
    slug: "malabak",
    name: "Malabak",
    category: "Booking · Arabic",
    description:
      "A football pitch booking site in Arabic: pick a pitch and time slot, see the price and status before confirming, and track your booking. Includes an owner login.",
    url: "https://malabak-new.pages.dev",
    image: malabak,
  },
  {
    slug: "noir",
    name: "Noir Auto Haus",
    category: "Showroom · Bilingual",
    description:
      "A dark, luxury showroom concept for rare cars and superbikes, with a filterable collection, prices in EGP and an Arabic language option.",
    url: "https://noir-auto-haus.fadysgb2016.workers.dev",
    image: noir,
  },
  {
    slug: "shifaa",
    name: "Shifaa Clinic Compass",
    category: "Healthcare · Arabic",
    description:
      "A multi-specialty clinic website: browse specialties and doctors, book an appointment, and follow up on a booking. Includes a doctor login.",
    url: "https://shifaa-clinic-compass.pages.dev",
    image: shifaa,
  },
  {
    slug: "fixflow",
    name: "FixFlow",
    category: "Productivity tool",
    description:
      "A workflow helper for small stores, restaurants and services: describe what goes wrong, see where the process gets stuck, and get a simpler flow.",
    url: "https://fixflow-insight-harbor.lovable.app",
    image: fixflow,
  },
];

export interface Step {
  n: string;
  title: string;
  text: string;
}

export const steps: readonly Step[] = [
  {
    n: "01",
    title: "Understand",
    text: "Clarify the idea, the audience and the requirements before building anything.",
  },
  {
    n: "02",
    title: "Design",
    text: "Plan the page structure and the user experience so the flow feels obvious.",
  },
  {
    n: "03",
    title: "Build",
    text: "Develop and refine through AI-assisted workflows, iterating prompt by prompt.",
  },
  {
    n: "04",
    title: "Test & Deploy",
    text: "Verify functionality, responsiveness and the production build before going live.",
  },
];

export interface Tool {
  name: string;
  mark: string;
  use: string;
}

export const tools: readonly Tool[] = [
  { name: "Lovable", mark: "Lv", use: "Building and iterating on web apps" },
  { name: "Claude", mark: "Cl", use: "Reasoning, writing and refining prompts" },
  { name: "ChatGPT", mark: "Gp", use: "Ideation and problem-solving" },
  { name: "Cloudflare", mark: "Cf", use: "Hosting and deployment" },
];
