// Project cards for the Projects section. Content and layout come from the
// P and L arrays in portfolio-designs/reference/index.html.
export interface Project {
  name: string;
  /** Type of project, shown before the meta line, e.g. "Full-stack web app". */
  category: string;
  /** Date, team or context, e.g. "Hackathon · Oct 2026 · team of 4". */
  meta: string;
  description: string;
  tags: string[];
  /** Source code link; omit to hide the "source ↗" link. */
  url?: string;
  /** Live site link; omit to hide the "live ↗" link. */
  live?: string;
  /** Small badge next to the title. */
  status?: "wip";
  /** Desktop column: "left" is the wide (2fr) column, "right" the narrow (1fr) one. */
  column: "left" | "right";
  /** CSS aspect-ratio of the screenshot area, e.g. "16/10". */
  aspect: string;
  /** Two colors for the placeholder panel gradient, shown until `img` is set. */
  placeholder: [string, string];
  /** Screenshot path under /projects/ (put the file in public/projects/). */
  img?: string;
}

// Listed in single-column (mobile) order. Desktop columns keep this order within each column.
export const projects: Project[] = [
  {
    name: "LuChess",
    category: "Full-stack web app",
    meta: "Personal project · self-hosted on a Raspberry Pi 5",
    description:
      "A chess study app built on Luhmann's Zettelkasten method. Each note is a game, linked to related games and openings so you learn through connections instead of memorization. Includes a book-like read mode, a shared library of studies, and opening-focused practice games.",
    tags: ["React", "Go", "PostgreSQL", "Self-hosted"],
    url: "https://github.com/EdwardVNguyen/LuChess",
    live: "https://luchess.us/",
    column: "left",
    aspect: "16/10",
    placeholder: ["#e4dcf7", "#b9a9ec"],
    img: "/projects/luchess.webp",
  },
  {
    name: "Orion",
    category: "AI agent",
    meta: "Hackathon · Oct 2026 · team of 4",
    description:
      "Voice-controlled Chrome extension agent built in 24 hours: talk to your browser and it navigates and acts for you.",
    tags: ["Chrome extension", "AI agent", "Voice"],
    url: "https://github.com/rmrfbot/orion-agent",
    column: "right",
    aspect: "4/5",
    placeholder: ["#d9ccf7", "#b8a8ec"],
    img: "/projects/orion.webp",
  },
  {
    name: "BALDR",
    category: "Game development",
    meta: "Team · Unity",
    description:
      "Game built with a team for Intro to Game Development, written in C# on a shared repo.",
    tags: ["Unity", "C#"],
    status: "wip",
    column: "left",
    aspect: "21/9",
    placeholder: ["#f0d9ec", "#bba9ee"],
    img: "/projects/baldr.webp",
  },
  {
    name: "SnailMail",
    category: "Full-stack web app",
    meta: "Aug – Dec 2025 · led team of 5",
    description:
      "Full-stack post office package logistics app. I built the React frontend against our REST API, designed the MySQL schema, and tested endpoints in Postman.",
    tags: ["React", "Node.js", "MySQL", "Vercel", "Railway"],
    url: "https://github.com/EdwardVNguyen/SnailMail",
    column: "right",
    aspect: "4/3",
    placeholder: ["#e9dcf5", "#c9b6ee"],
    img: "/projects/snailmail.webp",
  },
];
