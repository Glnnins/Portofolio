# GLENNINS Portfolio

Personal portfolio for **Glennins Sindim — Informatics Student & Web Developer**.

## Highlights
- Dark editorial UI with responsive layout
- Interactive 3D lanyard ID card
- About / profile section
- Dedicated tech stack section
- Selected projects grid
- Contact CTA with GitHub, Instagram, and email
- Light/dark theme toggle
- GSAP reveal animations + Lenis smooth scrolling
- Reduced-motion support
- SEO metadata, Open Graph, sitemap and robots.txt

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Recommended: **Vercel**. Import the GitHub repository, keep the default Vite settings, and deploy.

### Before publishing
Update the canonical URL in `index.html` and `public/sitemap.xml` to your final production domain if it is different from `https://glnnins.github.io/portfolio/`.

## Project structure

```text
src/
  css/input.css
  js/main.js
public/
  assets/
  robots.txt
  sitemap.xml
index.html
package.json
package-lock.json
```

`node_modules` and `dist` are intentionally excluded from the source ZIP. Run `npm install` and `npm run build` locally or on the hosting platform.
