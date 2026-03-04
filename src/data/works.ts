export interface Work {
  company: string;
  desc: string;
  image: string;
  tech: string[];
  live: string;
}

export const listWorks: Work[] = [
  {
    company: "In You Market",
    desc: "A market place, for selling organic items",
    image: "/works/inyou.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://inyoumarket.net",
  },
  {
    company: "Fumira",
    desc: "",
    image: "/works/fumira.png",
    tech: ["HTML", "SCSS", "JavaScript"],
    live: "",
  },
  {
    company: "Es Teh Indonesia",
    desc: "Internal CRM Dashboard",
    image: "/works/esteh.jpg",
    tech: ["Next.js", "Firebase", "MUI Material", "Socket.io"],
    live: "",
  },
  {
    company: "Rakata ID",
    desc: "One stop literary corner for book lovers. Read, write, connect 📖",
    image: "/works/rakata.jpg",
    tech: ["React.js", "TypeScript", "Firebase", "Styled Components"],
    live: "https://rakata.id",
  },
  {
    company: "Otego Media",
    desc: "Internal ERP Dashboard",
    image: "/works/otego.jpg",
    tech: ["Next.js", "MUI Material"],
    live: "",
  },
  {
    company: "Blue Karma Secrets",
    desc: "A magical combination of lush settings, wellness experiences, and exquisitely appointed domicilies",
    image: "/works/bks.png",
    tech: ["Next.js", "TypeScript", "Mantine UI", "Socket.io"],
    live: "https://bluekarmasecrets.com",
  },
  {
    company: "Lucy Dream Art",
    desc: "Discover the ultimate online destination for purchasing artwork. Explore a diverse range of original paintings, fine art photographs, and more from the most comprehensive selection available",
    image: "/works/lucydream.jpeg",
    tech: ["Next.js", "TypeScript", "Mantine UI", "Socket.io"],
    live: "https://lucydreamart.com",
  },
  {
    company: "Poke Render",
    desc: "Learn the difference between CSR and SSR using data from Poke API",
    image: "/works/poke-ball.png",
    tech: ["Next.js", "TypeScript"],
    live: "https://learn-rendering.vercel.app",
  },
];
