interface WorkInformation {
  logo: string;
  company: string;
  role: string;
  start_date: string;
  end_date: string | null;
  location: String;
  work_type: String;
  description: string;
}

export interface WorkExperience extends WorkInformation {
  job_list?: string[];
  link?: string;
  transfer?: WorkInformation;
}

export const workExperience: WorkExperience[] = [
  {
    logo: "/favicon/android-chrome-192x192.png",
    company: "Freelance",
    role: "Frontend Developer",
    start_date: "2023-01-01",
    end_date: null,
    location: "Jakarta",
    work_type: "Remote",
    description:
      "As a freelancer, I have collaborated with various clients to deliver high-quality web applications and digital solutions tailored to their specific needs.",
    job_list: [
      "Developing and launching a complex web-based marketplace platform for international clients, supporting efficient and scalable e-commerce operations.",
      "Developing and implementing a comprehensive internal CRM dashboard, integrating invoice management, attendance, and real-time live chat features (using Socket.IO) to enhance operational efficiency and team communication.",
      "Actively contributed to the development of key features on the internal platform, including the dashboard module, community forum, withdrawal system, and product monetization functionality.",
    ],
  },
  {
    logo: "/experience/steradian.jpg",
    company: "PT. Steradian Data Optima",
    role: "Frontend Developer",
    start_date: "2025-07-27",
    end_date: "2026-01-30",
    location: "Jakarta",
    work_type: "On-site",
    description:
      "PT. Steradian Data Optima is a trusted technology partner that delivers smart, secure, and scalable digital solutions to support long-term organizational growth.",
    job_list: [
      "Working as Frontend Developer at PT Bank Rakyat Indonesia to develop the Payroll module for QLola (Top 5 feature), focusing on delivering a high-quality and intuitive user experience.",
      "Collaborated with the product team to design and deploy new payroll capabilities tailored to user needs.",
      "Maintained and enhanced the Payroll reporting features, ensuring accurate data visualization for users.",
      "Managed the lifecycle of the payroll reporting module, ensuring data integrity and consistent performance.",
      "Built scalable frontend components for new payroll features and maintained complex reporting modules.",
    ],
    link: "https://steradian.co.id",
    transfer: {
      logo: "/experience/pkss.png",
      company: "PT. Prima Karya Sarana Sejahtera",
      role: "Frontend Developer",
      start_date: "2026-02-03",
      end_date: null,
      location: "Jakarta",
      work_type: "On-site",
      description:
        "PT Prima Karya Sarana Sejahtera (PKSS) is an affiliate of the BRI Worker Welfare Foundation and the BRI Pension Fund.",
    },
  },
  {
    logo: "/experience/peha.jpg",
    company: "PT. Saudara Digital Indonesia (Peha Agency)",
    role: "Frontend Developer",
    start_date: "2024-09-09",
    end_date: "2025-07-27",
    location: "Jakarta",
    work_type: "On-site",
    description:
      "PT. Saudara Digital Indonesia or as known as Peha Agency is a digital agency company that giving an ditial solution for business needs. We are specialize in Social Media Management and Digital Advertising.",
    job_list: [
      "Developing a responsive company web profile to enhance the company's digital image and online presence.",
      "Creating an internal invoice and quotation management application that reduces document creation time and minimizes manual errors.",
      "Designing and launching an employee task monitoring application resulted in a significant increase in accountability and timely project completion.",
      "Developing a series of internal and external applications that successfully improved operational efficiency and supported the company's business growth.",
    ],
    link: "https://peha.id",
  },
  {
    logo: "/experience/hyppe.png",
    company: "PT. Hyppe Teknologi Indonesia",
    role: "Frontend Engineer",
    start_date: "2022-09-22",
    end_date: "2025-02-28",
    location: "Jakarta",
    work_type: "On-site",
    description:
      'PT. Hyppe Teknologi Indonesia is the company behind "Hyppe" application, a content management platform that helps content creators to manage and distribute their digital content easily.',
    job_list: [
      "Managing and developing new features on the internal operational dashboard, supporting mobile application needs, and ensuring seamless integration with Alibaba VOD (Video on Demand) for efficient content management.",
      "Responsible for the maintenance and development of new features on the dashboard accessed directly by application users, with a focus on enhancing user engagement and satisfaction.",
      "Designing and implementing a dynamic company profile website, serving as the main gateway for potential users and partners to get to know the company.",
    ],
    link: "https://hyppe.id",
  },
  {
    logo: "/experience/wispay.png",
    company: "PT. Bintang Digital Asia (Wispay)",
    role: "Frontend Engineer",
    start_date: "2022-01-27",
    end_date: "2022-09-18",
    location: "Jakarta",
    work_type: "Remote",
    description:
      "PT. Bintang Digital Asia is or known as Wispay, a financial technology company that provides digital payment solutions for businesses and individuals in Indonesia.",
    job_list: [
      "Expand the reach of Wispay to the general public through the landing page website.",
      "Helping the needs of internal admins to solve bugs in a product and work closely with the Backend team to implement RESTful API architecture during development or maintenance.",
    ],
    link: "https://wis-pay.com",
  },
  {
    logo: "/experience/loka-padang.jpeg",
    company: "PT. Loka Padang",
    role: "Frontend Engineer",
    start_date: "2021-09-01",
    end_date: "2021-12-01",
    location: "Jakarta",
    work_type: "Remote",
    description: `PT. Loka Padang is a culinary business that specializes in Vegetarian Padang food, offering a variety of traditional Padang dishes made from plant-based ingredients.`,
    job_list: [
      "Create real time monitoring and inventory management dashboard. Customer enquiry and orders flow in from various sources at the same time in multiple platforms, two informations needs to be captured (order status, customer historical purchases) from this data management system",
    ],
    link: "https://www.instagram.com/lokapadang/",
  },
];
