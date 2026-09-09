# Seethi Ganesh Kumar Reddy — Developer Portfolio

A premium, dark-themed, fully responsive personal portfolio built with **React + Vite** and **Material UI**, targeting Frontend Developer, React Developer, Full Stack Developer, Java Developer, and Software Developer roles.

## Tech stack

- React 18 + Vite 5
- Material UI (MUI) v6
- Framer Motion (scroll reveals, hero rotation, animated code window)
- Lucide React icons
- Plain CSS (global resets, scrollbar, reduced-motion support) — no CSS framework needed on top of MUI

## Project structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CodeWindow.jsx        # animated hero code-window visual
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx          # includes confidentiality modal for company project
│   │   ├── Achievements.jsx
│   │   ├── CertificationsEducation.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── PageLoader.jsx
│   │   ├── GlassCard.jsx         # reusable glassmorphism panel
│   │   ├── SectionHeading.jsx    # reusable section title + accent rule
│   │   └── Reveal.jsx            # reusable scroll-reveal wrapper (respects reduced motion)
│   ├── data/
│   │   └── portfolioData.js      # ALL real content lives here — edit this file to update the site
│   ├── theme.js                  # MUI theme + design tokens (colors, type)
│   ├── index.css                 # global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html                    # SEO meta, Open Graph, Twitter cards, fonts
├── vite.config.js
├── package.json
└── README.md
```

## Editing content

Everything visible on the site — name, headline, skills, the Vensyx Data Solutions experience entry, project descriptions, certifications, education, and contact details — is defined in **`src/data/portfolioData.js`**. Update values there rather than hunting through components.

A few fields are intentionally left blank because no real value was supplied, and the related UI hides itself automatically until you fill them in:

| Field | Location | Effect while empty |
|---|---|---|
| `profile.github` | `portfolioData.js` | GitHub icon hidden in footer |
| `profile.resumeUrl` | `portfolioData.js` | "Download Resume" buttons render disabled with a tooltip |
| `project.githubUrl` / `project.liveUrl` | per project in `portfolioData.js` | GitHub / Live Demo buttons hidden per project |

## Content accuracy notes (please keep these when editing)

- The **Real Estate Web Application** is labeled "Professional Contribution — Vensyx Data Solutions," not a personal project. Its card only shows a confidentiality-explainer modal ("Professional Contribution" button) instead of source-code or live links, and no internal URLs, dashboards, or client data are included anywhere in the codebase.
- No technologies are listed as professional expertise beyond what was supplied (AWS, C#, Webflow, DevOps/cloud engineering are not included).
- No companies, dates, certifications, metrics, or project links have been invented — only what was provided is shown, and placeholder links are never used as if they were real.

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static site is output to `dist/`.

## Deployment

### Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **New Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel handles the rest automatically.

Alternatively, from the CLI:

```bash
npm install -g vercel
vercel
```

### Netlify

1. Push this project to a GitHub repository.
2. In Netlify, click **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

Or via CLI:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Before going live — checklist

- [ ] Add a real resume file/URL to `profile.resumeUrl` in `portfolioData.js` to enable the resume download buttons.
- [ ] Add your GitHub URL to `profile.github` if you want the footer icon to appear.
- [ ] Add real GitHub/live links to the two personal projects if/when they're public.
- [ ] Replace `public/og-image.png` with a real 1200×630 social preview image (referenced in `index.html`'s Open Graph/Twitter tags — a placeholder path is set but no image file is bundled).
- [ ] Wire the contact form to a real email service (e.g. Formspree, EmailJS, or your own API route) if you want submissions delivered automatically — it currently validates client-side and points visitors to email you directly, exactly as specified.
- [ ] Update the deployed URL in `index.html`'s `og:url` meta tag.

## Accessibility

- Visible keyboard focus ring (cyan outline) on all interactive elements.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and heading hierarchy.
- `prefers-reduced-motion` is respected globally — animations are skipped/shortened when a visitor has this OS setting enabled.
- Sufficient color contrast between text and the dark navy background.
- Descriptive `aria-label`s on icon-only buttons and the animated hero visual.
