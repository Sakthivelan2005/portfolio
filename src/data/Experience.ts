import { Images, type ThemeImage } from "../config/Images";

export interface Experience {
  title: string;
  company: string;
  logo: ThemeImage;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Mobile App Developer Intern",
    company: "Coderz Vision Technology LLP",
    logo: Images.coderz,
    period: "Dec 2025 – Jan 2026",
    description:
      "Developed 'MeTime' beauty service mobile app using React Native with OTP authentication.",
  },
  {
    title: "React Developer Intern",
    company: "Kirana Connect",
    logo: Images.kirana,
    period: "Mar 2024 – Jun 2024",
    description:
      "Built full-stack E-commerce platform using MongoDB, Express, React, Node with order processing backend.",
  },
  {
    title: "Web Development Intern",
    company: "GenZ Educate Wing",
    logo: Images.genz,
    period: "Nov 2023 – Jan 2024",
    description:
      "Designed and developed real-estate website focusing on UI/UX and accessibility.",
  },
];
