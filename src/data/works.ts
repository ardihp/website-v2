export interface Work {
  company: string;
  desc: string;
  logo: string;
  thumbnail: string;
  tech: string[];
  live: string;
  type: (
    | "landing-page"
    | "crm-dashboard"
    | "erp-dashboard"
    | "admin-dashboard"
    | "custom"
  )[];
}

export const listWorks: Work[] = [
  {
    company: "In You Market",
    desc: "Landing page slicing was completed, along with integration of key features including authentication, user profile management, and subscription functionality.",
    logo: "/works/inyou.png",
    thumbnail: "/works/inyoumarket.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://inyoumarket.net",
    type: ["landing-page"],
  },
  {
    company: "Fumira",
    desc: "UI slicing was performed for several key pages, including articles, careers, products, and contact. This work involved translating design layouts into clean, structured front-end code to ensure a consistent and responsive.",
    logo: "/works/fmr.png",
    thumbnail: "/works/fumira.jpeg",
    tech: ["HTML", "SCSS", "JavaScript"],
    live: "",
    type: ["landing-page"],
  },
  {
    company: "Es Teh Indonesia",
    desc: "A CRM dashboard was developed for internal company needs, enabling the tracking of attendance, ticketing issues, invoices, and other operational matters. It serves as a centralized platform to efficiently monitor and manage in one integrated system.",
    logo: "/works/esteh.jpg",
    thumbnail: "/works/esteh.png",
    tech: ["Next.js", "Firebase", "MUI Material", "Socket.io"],
    live: "",
    type: ["crm-dashboard"],
  },
  {
    company: "Rakata ID",
    desc: "UI slicing was carried out for several pages with a primary focus on mobile views. Integration with the backend was also performed to retrieve and display data for the dashboard, withdrawal features, and other related functionalities, ensuring a responsive and data-driven user experience.",
    logo: "/works/rakata.jpg",
    thumbnail: "/works/rakata.png",
    tech: ["React.js", "TypeScript", "Firebase", "Styled Components"],
    live: "https://rakata.id",
    type: ["admin-dashboard"],
  },
  {
    company: "Otego Media",
    desc: "A feature was developed to handle complex calculations related to ad placements across available media. A PDF export function was also implemented for transaction data, enabling users to generate and download detailed reports for record-keeping and analysis.",
    logo: "/works/otego.jpg",
    thumbnail: "/works/not-available.png",
    tech: ["Next.js", "MUI Material"],
    live: "",
    type: ["erp-dashboard"],
  },
  {
    company: "Blue Karma Secrets",
    desc: "A landing page was developed to offer hotels, villas, resorts, and other experiences. Additionally, a dashboard was created to accommodate and manage the data associated with the landing page, live chat available.",
    logo: "/works/bks.png",
    thumbnail: "/works/bluekarma.jpeg",
    tech: ["Next.js", "TypeScript", "Mantine UI", "Socket.io"],
    live: "https://bluekarmasecrets.com",
    type: ["landing-page", "admin-dashboard"],
  },
  {
    company: "Lucy Dream Art",
    desc: "A landing page was created to introduce Balinese artists and facilitate the buying and selling of their artworks. The solution was made available both through the landing page and a dedicated dashboard, live chat available.",
    logo: "/works/lucydream.jpeg",
    thumbnail: "/works/lucydream.png",
    tech: ["Next.js", "TypeScript", "Mantine UI", "Socket.io"],
    live: "https://lucydreamart.com",
    type: ["landing-page", "admin-dashboard"],
  },
  {
    company: "Poke Render",
    desc: "Learn the difference between CSR and SSR using data from Poke API",
    logo: "/works/poke-ball.png",
    thumbnail: "/works/rendering.png",
    tech: ["Next.js", "TypeScript"],
    live: "https://learn-rendering.vercel.app",
    type: ["custom"],
  },
];
