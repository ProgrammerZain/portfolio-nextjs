# Zain Irfan — Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and MUI v9.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** Tailwind CSS v4 (layout/utilities) + MUI v9 (complex components)
- **Animation:** Framer Motion
- **Deployment:** Netlify via GitHub Actions

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run format` | Format with Prettier |

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which lints, type-checks, builds, and deploys to Netlify via CLI. See that file for required GitHub Secrets.
