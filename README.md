# Andro Fady — Portfolio

Personal portfolio showcasing selected web projects, development process, tools, and contact information.

**Live portfolio:** https://pixel-perfect-replay-5342.fadysgb2016.workers.dev

## Highlights

- Responsive portfolio layout with accessible navigation.
- Selected live projects with screenshots, summaries, and demo links.
- About, process, tools, and contact sections.
- Scroll-reveal and motion effects with reduced-motion support.
- Search/social metadata, a dedicated Open Graph preview image, and an XML sitemap.
- Static project content maintained in one file for easy updates.

## Technology

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite 8
- Tailwind CSS v4 and Radix UI
- Vitest, Testing Library, ESLint, and Prettier
- Nitro Cloudflare preset

There is no application database or authentication backend in this portfolio.

## Local development

### Requirements

- Bun (the repository includes `bun.lock`), or Node.js with npm

### Install

```bash
git clone https://github.com/androfady340-source/pixel-perfect-replay-5342.git
cd pixel-perfect-replay-5342
bun install --frozen-lockfile
```

### Run

```bash
bun run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run lint` | Run ESLint |
| `bun run test` | Run the Vitest test suite |
| `bun run build` | Create the Cloudflare production build |
| `bun run preview` | Preview the build |
| `bun run format` | Format source files with Prettier |

## Update portfolio content

Edit `src/content/site.ts` to update:

- Profile title, tagline, location, email, and phone
- Navigation labels
- Project names, categories, descriptions, demo URLs, and screenshots
- Process steps and tools

Replace project preview images in `src/assets/projects/` when the live sites change. The social preview image is `public/og-image.jpg`.

## Deployment

This repository does not currently include a Wrangler configuration file. The production site is hosted on Cloudflare Workers, so verify the connected Cloudflare project's build command, output, and deployment settings before deploying. Do not run `wrangler deploy` from this repository until the Worker configuration is present or the deployment pipeline explicitly supplies it.

## Maintainer

Andro Fady — [GitHub](https://github.com/androfady340-source)
