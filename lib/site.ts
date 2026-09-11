export const SITE = {
  name: "L.B. Deyo",
  title: "L.B. Deyo, Designer",
  email: "lbdeyo@gmail.com",
  location: "Austin",
  tagline: "I design and build the things people look at twice.",
  description:
    "Full-service web design and development. Motion graphics, video, print, and illustration.",
};

export const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const CLIENTS = [
  "Ford Motor Company",
  "Jane",
  "Cisco Systems",
  "Universal Studios",
  "The Plaza Hotel",
  "Calvin Klein",
] as const;

export const CAPABILITIES = [
  {
    index: "01",
    title: "Design",
    body: "Digital and print. Photoshop, Illustrator, InDesign, Figma — and a pencil when that’s the right tool.",
  },
  {
    index: "02",
    title: "Motion & film",
    body: "Production and post in Premiere, After Effects, Final Cut, and Cinema 4D. Picture, type, and sound.",
  },
  {
    index: "03",
    title: "Code",
    body: "HTML, CSS, JavaScript, React, Next.js, Tailwind. Interfaces that feel as considered as they look.",
  },
  {
    index: "04",
    title: "Words & pictures",
    body: "Editorial and advertising copy. Freehand and digital illustration. Sound in Logic Pro and Audition.",
  },
] as const;
