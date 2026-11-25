# portfolio

Edward Nguyen's portfolio, built with [Astro](https://astro.build) and deployed on Cloudflare Pages.

## Commands

| Command             | Action                                      |
| ------------------- | ------------------------------------------- |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start the dev server at `localhost:4321`    |
| `npm run build`     | Build the static site to `./dist/`          |
| `npm run preview`   | Preview the production build locally        |
| `npm run check`     | Type-check `.astro` and `.ts` files         |

## Layout

- `src/` — pages, components, data and styles
- `public/layers/` — pixel-art layers for the hero and contact scenes (served as-is)
- `portfolio-designs/` — the design spec (`DESIGN.md`), screenshots and the reference prototype

## Deploy

Cloudflare Pages, connected to this repo: build command `npm run build`, output directory `dist`. Node version comes from `.node-version`.
