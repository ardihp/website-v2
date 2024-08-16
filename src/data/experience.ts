export interface WorkExperience {
  logo: string;
  company: string;
  role: string;
  start_date: string;
  end_date: string | null;
  description: string;
  link: string;
}

export const workExperience: WorkExperience[] = [
  {
    logo: "/experience/hyppe.png",
    company: "PT. Hyppe Teknologi Indonesia",
    role: "Frontend Engineer",
    start_date: "2022-09-22",
    end_date: null,
    description: `Creating and optimizing landing page websites that align with the company's branding and user engagement.`,
    link: "https://hyppe.id",
  },
  {
    logo: "/experience/wispay.png",
    company: "PT. Bintang Digital Asia (Wispay)",
    role: "Frontend Engineer",
    start_date: "2022-01-27",
    end_date: "2022-09-18",
    description: `Expand the reach of Wispay to the general public through the landing page website, also helping the needs of internal admins to solve bugs in a product.`,
    link: "https://wis-pay.com",
  },
  {
    logo: "/experience/loka-padang.jpeg",
    company: "PT. Loka Padang",
    role: "Frontend Engineer",
    start_date: "2021-09-01",
    end_date: "2021-12-01",
    description: `Developing a real-time monitoring and inventory management dashboard.`,
    link: "https://www.instagram.com/lokapadang/",
  },
];
