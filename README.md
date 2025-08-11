# Formula-1 Data Dashboard

A Next.js + Tailwind CSS dashboard for Formula 1 fans. It shows the next race, standings, news, and more using reusable UI components. The next race card fetches live schedule data from the free Ergast API.

## Tech stack
- Next.js 15 (App Router, React 19)
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Recharts

## Features
- Live “Next Race” card with countdown (Ergast API)
- Pages: Home, Race Calendar, Standings, Driver Comparison, Blog
- Dark theme and responsive layout
- Reusable UI components in `components/ui`

## Getting started

Prerequisites
- Node.js 18.17+ (LTS recommended)
- One package manager: PNPM or NPM

Install dependencies
- With PNPM: `pnpm install`
- With NPM: `npm install`

Run the dev server
- PNPM: `pnpm dev`
- NPM: `npm run dev`
- Open http://localhost:3000

Build and run production
- Build: `pnpm build` or `npm run build`
- Start: `pnpm start` or `npm start`

## Data source
- Ergast F1 API (no key required)
  - Next race endpoint used by the app: `https://ergast.com/api/f1/current.json` (the app picks the first future-dated race)
  - Alternative for just the next event: `https://ergast.com/api/f1/current/next.json`

## Project structure
```
app/                # App Router pages and layout
components/         # Feature widgets and UI primitives
hooks/              # Custom hooks
lib/                # Utilities
public/             # Static assets
styles/             # Global styles
```

## Scripts
- `dev` – start Next.js in development
- `build` – build the app
- `start` – start production server
- `lint` – run Next.js/ESLint checks

## Troubleshooting
- "next is not recognized" on Windows
  - Run `pnpm install` or `npm install` first. The `next` binary is provided in `node_modules/.bin` and is available through `npm run`/`pnpm` scripts.
- Port already in use
  - Run with a different port: `PORT=3001 pnpm dev` (PowerShell: `$env:PORT=3001; pnpm dev`)
- PNPM not installed
  - Use NPM commands instead or install PNPM: `npm i -g pnpm`

## Deploy
- Vercel (recommended)
  1) Push this repo to GitHub
  2) Import the repo in Vercel and deploy with defaults
- Netlify/Other
  - Build command: `npm run build` (or `pnpm build`)
  - Output dir: `.next`

## Push to your GitHub
1) Create an empty GitHub repo in your account
2) In this project folder, set the remote and push:
   - `git remote add origin https://github.com/<your-username>/<repo>.git`
   - `git push -u origin main`

## Environment and security
- This project currently uses only public APIs. No API keys are required.
- If you add providers that require keys, store them in `.env.local` (ignored by Git) and never commit them.

## License
Add a license (e.g., MIT) if you plan to open source.