// Site-wide details. Placeholders (email, LinkedIn, résumé) get filled in by issue #11.
export const site = {
  name: "Edward Nguyen",
  title: "Edward Nguyen — Portfolio",
  description:
    "Edward Nguyen — full-stack developer and CS senior at the University of Houston, building web apps with React, Go and PostgreSQL.",
  url: "https://ednguy.dev",
  email: "you@example.com",
  github: "https://github.com/EdwardVNguyen",
  linkedin: "https://www.linkedin.com/",
  resume: "/resume.pdf",
  // Leave empty to send the contact form through the visitor's email app (mailto).
  formEndpoint: "",
};

// Page sections in order; drives the top nav and the footer links.
export const sections = [
  { id: "about", label: "whoami" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
] as const;
