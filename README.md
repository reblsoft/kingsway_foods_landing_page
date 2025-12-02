Kingsway Foods — Marketing Landing Page

Brief marketing landing page built with Next.js and TypeScript showcasing the Kingsway Foods product family (hero, features, screenshots, testimonials and contact section).

Table of Contents

- Project
- Tech Stack
- Getting Started
- Project Structure
- Key Components
- Deployment
- Contributing & License

Project

- Purpose: Provide a fast, responsive landing page for Kingsway Foods with marketing sections and screenshot carousel.
- UI: Built as a modern single-page marketing site using the Next.js App Router.

Tech Stack

- Framework: Next.js (v16.0.3)
- Language: TypeScript (v5)
- UI / Icons: react (v19.2.0), lucide-react
- Styling: Tailwind CSS (v4) + PostCSS
- Utilities: clsx, tailwind-merge, motion

Getting Started
Clone the repository and install dependencies.

PowerShell (recommended):

```powershell
git clone <repo-url> kingsway-foods
cd kingsway-foods
npm install
```

Scripts

- `npm run dev` — runs the development server.
- `npm run build` — builds the production app.
- `npm start` — starts the built app.
- `npm run lint` — runs ESLint.

Project Structure

- `next.config.ts` — Next.js configuration.
- `package.json` — scripts and dependencies.
- `tsconfig.json` — TypeScript config.

Important source folders under `src/`:

- `app/` — App Router entrypoints and layout.
  - `app/layout.tsx`, `app/page.tsx`, `globals.css`
- `src/components/` — UI components.
  - `components/fragments/` — Header, Footer, PrimaryBtn, InfiniteScreenshots
  - `components/sections/` — HeroSection, AboutUs, Features, Screenshots, Testimonials, ContactUs
- `src/assets/` — images and icons
- `src/hooks/` — custom hooks
- `src/lib/` — helper functions

Key Components & Behavior

- HeroSection: Top-of-page banner with CTA.
- InfiniteScreenshots: Continuous screenshots carousel.
- Features: Product highlights.
- Testimonials: Customer quotes.
- ContactUs: Contact block / signup area.

Styling & Assets

- Tailwind CSS with PostCSS. Check `postcss.config.mjs` and `tailwind.config.js`.
- Public assets in `public/` and `src/assets/images`.

Environment & Configuration

- No runtime environment variables required for the static landing page. Use `.env.local` for secrets if needed.

Testing & Linting

- ESLint is available via `npm run lint`.

Deployment

- Recommended: Vercel (connect the repo and use `npm run build`).
- Or build locally and serve with `npm start`.

Contributing

- Fork, create a branch, and open a PR with a clear description.

License

- No license file present. Add `LICENSE` (e.g., MIT) to make terms explicit.

Contact

- Open an issue in the repository for questions or support.
