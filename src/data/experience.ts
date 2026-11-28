// Timeline entries for the Experience section, newest first.
// Text comes from the #experience markup in portfolio-designs/reference/index.html.
export interface ExperienceEntry {
  /** Date range shown in the left column, e.g. "Jan – May 2025". */
  when: string;
  title: string;
  description: string;
  /** Render the description in the dimmer --sub color. */
  muted?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    when: "Nov 2026",
    title: "Open-source contributor · career-ops",
    description:
      "Merged a fix into career-ops, an 82k-star open-source AI agent: refactored its JavaScript regex so Unicode bullets in scraped job data parse correctly.",
  },
  {
    when: "May 2026 – present",
    title: "Web Developer · Southwest Union of Vietnamese Student Associations",
    description:
      "Building the frontend of SWUVSA's website in Astro, working with the design team to turn mockups into responsive, accessible pages.",
  },
  {
    when: "Jan – May 2025",
    title: "Undergraduate Research Assistant · UH Computer Science",
    description:
      "On a four-person team using neural networks to locate devices indoors from digital TV (ATSC) signals. Ran data collection with a Raspberry Pi and USB TV tuner; presented the team's poster at research day.",
  },
  {
    when: "exp. May 2027",
    title: "B.S. Computer Science · University of Houston",
    description:
      "Fall 2026: Computer Graphics, Digital Image Processing, Intro to Game Development.",
    muted: true,
  },
];
