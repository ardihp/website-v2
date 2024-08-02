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
    desc: "𝑨 𝒎𝒂𝒈𝒊𝒄𝒂𝒍 𝒄𝒐𝒎𝒃𝒊𝒏𝒂𝒕𝒊𝒐𝒏 𝒐𝒇 𝒍𝒖𝒔𝒉 𝒔𝒆𝒕𝒕𝒊𝒏𝒈𝒔, 𝒘𝒆𝒍𝒍𝒏𝒆𝒔𝒔 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆𝒔, 𝒂𝒏𝒅 𝒆𝒙𝒒𝒖𝒊𝒔𝒊𝒕𝒆𝒍𝒚 𝒂𝒑𝒑𝒐𝒊𝒏𝒕𝒆𝒅 𝒅𝒐𝒎𝒊𝒄𝒊𝒍𝒆𝒔",
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
    image: "/logo.png",
    tech: ["Next.js", "TypeScript"],
    live: "",
  },
];
