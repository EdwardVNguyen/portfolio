# Edward Nguyen — portfolio design spec

Hand this file plus the screenshots to whoever builds a chunk. `reference/index.html` is a working single-file prototype of the whole page. Treat it as the source of truth for exact values; the images show how it should look.

## Files

| Path | What it is |
|---|---|
| `desktop-full.png` | Whole page at 1440px wide |
| `tablet-full.png` | Whole page at 820px wide (2× resolution) |
| `mobile-full.png` | Whole page at 390px wide (2× resolution) |
| `desktop/`, `tablet/`, `mobile/` | One image per section: `1-hero` … `7-footer` |
| `reference/` | The prototype: `index.html`, `layers/` (art), `projects/` (empty, for screenshots) |

Static images can't show motion, so the **Behavior** notes in each section matter as much as the pictures.

## Design tokens

**Colors**

| Token | Hex | Use |
|---|---|---|
| `--ground` | `#1d1440` | Page background |
| `--card` | `#2a1f58` | Cards, panels, secondary buttons |
| `--line` | `#43377a` | Borders, dividers |
| `--text` | `#f3efff` | Main text |
| `--sub` | `#b5abd6` | Secondary text |
| `--rose` | `#ff3f72` | Primary accent: primary buttons, section numbers, active nav |
| `--sky` | `#6fd3f2` | Links, tags, footer dividers |
| `--lav` | `#c2b2ff` | Meta text, dates |
| amber | `#ffd36e` | "Back to top" button |
| footer | `#0f0914` | Footer background (matches the night-scene ground) |
| hero sky | `#a9a3e3` | Behind the hero art |

**Type**
- Headings: **Chakra Petch** 600/700. Section titles use `clamp(30px, 4vw, 44px)`. The hero name uses `clamp(44px, 9vw, 120px)`.
- Body text: **IBM Plex Sans** 400/600, 17px, line-height 1.6.
- Labels, nav, tags, buttons: **JetBrains Mono** 400/600, 12–14px.
- All three are free Google Fonts.

**Layout**
- Content sections are max 1100px wide, centered, with side padding `max(5vw, 16px)`.
- Projects is wider, max 1320px. Its title is held to the 1100px column so all section titles share one left edge.
- Shapes are square-cornered. Cards and panels have the **top-right corner cut off**: `clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)`.
- Section titles have a number in front, e.g. `01 whoami`: the number is in JetBrains Mono, rose, at about 0.55em.

**Breakpoints** (all max-width): 900 · 860 · 760 · 700 · 600 · 420.

## Page order and nav

1. Hero
2. `01 whoami` (anchor `#about`)
3. `02 Projects`
4. `03 Skills`
5. `04 Experience`
6. `05` Contact scene
7. Footer

**Top nav:** a fixed bar at the top center, links in lowercase: whoami, projects, skills, experience, contact. The link for the section currently on screen is highlighted rose (tracked with an IntersectionObserver).

## Chunks

Suggested order for building: 0 → 1 → 2–5 (these four can be built at the same time) → 6 → 7 → 8.

### Chunk 0: Base

Set up the design tokens, fonts, global styles, the fixed top nav with active-section highlighting, and smooth scrolling (with `scroll-padding-top: 72px`).

**Button hover (applies to every rectangle button):** a colored panel the size of the button flips down from its top edge into place behind the label, using `rotateX(-112deg)` → `0`, `transform-origin: top`, 200ms. On light-colored panels the text turns dark.

| Button | Panel color |
|---|---|
| Nav links | rose (sky on the active link) |
| Résumé | amber |
| Contact | sky |
| Send message | sky |
| Back to top | amber |

The panel also appears on keyboard focus. With reduced motion, it appears instantly.

### Chunk 1: Hero (`1-hero.png`)

- **Height:** full screen (100vh, minimum 560px).
- **Layers** from `layers/`, drawn with sharp pixels (`image-rendering: pixelated`). Each layer repeats horizontally and sits along the bottom at 64% of the hero's height (52% under 600px wide):
  - `sky.png`: stretched to fill the whole hero
  - `far.png`
  - `mid.png` with `rail.png` on top
  - `front.png`: dark indigo, the same color as the page background
- **Name:** "Edward Nguyen" sits between the far layer and the mid layer, near the top, in dark indigo with a white glow and a slight red/cyan color split. Below it: "full-stack developer".
- **Effects on top:** a radial white light bloom, a fog gradient, a falling-rain canvas, and a film-grain overlay (SVG turbulence, soft-light blend).
- **Behavior:** as you scroll, each layer moves down by `scrollY × factor` so it scrolls more slowly than the page. Factors: sky 0.1, bloom 0.15, far 0.3, name 0.38, mid 0.5, front 0. The rain pauses once the hero is off screen. Turn both off for reduced motion.
- A "scroll ↓" hint bobs at the bottom.

### Chunk 2: whoami (`2-whoami.png`)

- Two paragraphs: the first in main text color, the second in secondary.
- Two buttons:
  - **Résumé (PDF) ↓**: rose fill, links to `resume.pdf`
  - **Contact**: card fill, links to `#contact`

### Chunk 3: Projects (`3-projects.png`)

**Desktop layout:** two columns at a 2fr : 1fr ratio, each stacking its cards independently, so the cards are of uneven height.

| Column | Cards and image shapes |
|---|---|
| Left (wide) | LuChess (16:10), then BALDR (21:9) |
| Right (narrow) | Orion (4:5), then SnailMail (4:3) |

- **Below 700px:** a single column in this order: LuChess, Orion, BALDR, SnailMail.
- **Card:** an image area with the set shape, then a body with:
  - the title, plus an optional small sky "wip" badge
  - a line with the type of project and the date or team
  - a description
  - tech tags (JetBrains Mono, sky text on a dark chip)
  - a "source ↗" link
- **Hover:** the card lifts 4px and the image zooms to 1.04.
- **Images:** screenshots go in `projects/`. Until then, show a lavender placeholder panel with the project name.
- **Content:** in the `P` and `L` arrays in the reference script.

### Chunk 4: Skills (`4-skills.png`)

- Six tiles in one row on desktop, three per row below 860px. Order: Go, React, PostgreSQL, TypeScript, Git, Linux.
- **Tile:** a dark tile (`#171034`) with a drop shadow, the official logo at 56px in its brand color (from Simple Icons, inlined as SVG), and the name in capitals in JetBrains Mono.
- **Hover:** the tile lifts and the logo glows in its own brand color.

### Chunk 5: Experience (`5-experience.png`)

A timeline of rows separated by thin lines. Each row has the date on the left (lavender, JetBrains Mono, about 160px wide) and the title and description on the right. Below 760px the date stacks above the text.

The three entries are the volunteer web developer role, the undergraduate research assistant role, and the B.S. at University of Houston.

### Chunk 6: Contact scene (`6-contact.png`)

- **Size:** full width, at least `max(820px, 100vh)` tall, with overflow hidden.
- **Top edge:** a gradient fades from `--ground` into the scene.
- **Layers** from `layers/`, back to front: `night8.png` (sky with planet and galaxy), `night7`, `night6`, `night5` (mountains), `night4`, `night3` (trees), `night2` (ground), `night1` (the foreground branch on the right). Each fills the section (`background-size: cover`, anchored to the bottom, sharp pixels). There's a grain overlay on top.
- **Behavior:** while the section is entering the screen, each layer is shifted down by `distanceFromViewportTop × factor` and settles at 0 once the section reaches the top. Factors: 8 → 0.02, 7 → 0.06, 6 → 0.1, 5 → 0.14, 4 → 0.2, 3 → 0.26, 2 → 0, 1 → 0.34. This makes the trees and mountains rise from behind the ground.
- **Content:** on desktop, a two-column grid:
  - Left: "05 Let's build something together" in large light type, with a line about internships under it.
  - Right: a form panel (`rgba(31,20,52,.88)`, a thin lavender border, the cut corner) with Name, Your email, Message and a rose Send button.
- **Below 860px:** the content goes to one column, with extra space at the bottom so the scene shows below the form.
- **Form:** checks for empty fields and a valid email. If `FORM_ENDPOINT` (Formspree or similar) is set, it posts there and only says "sent" when the service confirms. Otherwise it opens a `mailto:` link.

### Chunk 7: Footer (`7-footer.png`)

- **Background:** `#0f0914`, so it continues straight from the scene's ground.
- **Three columns** separated by 2px sky lines:
  1. Name (rose, Chakra Petch), a tagline, and an amber outlined "Back to top ↑" button
  2. Section links, in capitals, in JetBrains Mono
  3. Icons for GitHub, LinkedIn and email, 28px each in a 46px tap area
- **Bottom row:** "© 2026 Edward Nguyen" on the left, "Built with determination" on the right.
- **Below 700px:** the name block goes on top, with the links and icons side by side underneath.

### Chunk 8: Polish and check

- Reduced motion is respected.
- Focus outlines are visible (2px rose).
- All tap targets are at least 44px.
- Nothing scrolls sideways at 360px wide.
- Images are lazy-loaded.
- Fill in the placeholders listed below.

## Placeholders to fill

- Email `you@example.com`: in the footer icon and in `MY_EMAIL` in the form script
- The LinkedIn link
- `resume.pdf`
- `FORM_ENDPOINT`
- Project screenshots

## Asset licenses

- **City layers** (`sky/far/mid/rail/front.png`): CraftPix free asset, recolored. Allowed for personal and commercial use. Don't redistribute the raw files.
- **Night layers** (`night1–8.png`): source to be confirmed by Edward; check the license allows web use.
- **Logos:** Simple Icons (CC0). The C# hexagon was drawn by hand.
