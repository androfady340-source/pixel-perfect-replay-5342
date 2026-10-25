# Andro Fady — Portfolio

Personal portfolio of Andro Fady, AI-Assisted Web Developer.

## Stack
TanStack Start (React 19 + TypeScript), Vite 7, Tailwind CSS v4. No backend, database or secrets.

## Prerequisites
Node.js 20+ and npm (or Bun).

## Commands
```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run lint       # lint
npm test           # tests
npm run build      # production build
```

## Build output
The build targets Cloudflare (server-rendered on Cloudflare Workers). Output goes to `dist/`
(`dist/client` for static assets, plus a Worker entry).

## Deploy to Cloudflare
1. Push this project to a Git repository.
2. Cloudflare dashboard → Workers & Pages → Create → connect the repository.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
4. Or deploy from your machine: `npm run build && npx wrangler deploy`.

## Custom domain
Not set yet. Once chosen, add it in Cloudflare and, if needed, add a canonical link and an
absolute `og:image` URL (`https://your-domain/og-image.jpg`) in `src/routes/index.tsx`.

## Content
All text, projects and contact details live in `src/content/site.ts`.
Project previews in `src/assets/projects/` are real screenshots of each live site.

## Limitations
- No WhatsApp link (not confirmed). No contact form — email and phone links only.
- Social preview image is not tagged until a final domain exists.
