import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiOracle,
} from "react-icons/si";
import { type IconType } from "react-icons";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";
interface IconConfig {
  icon: IconType;
  color: string;
}
import {
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";

export const Icons: Record<string, IconConfig> = {
  React: { icon: FaReact, color: "#61DBFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: FaNodeJs, color: "#68A063" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Express: { icon: SiExpress, color: "#000000" },
  PHP: { icon: FaPhp, color: "#777BB4" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Oracle: { icon: SiOracle, color: "#F80000" },
};


export interface ContactIconConfig {
  icon: IconType;
  link: string;
}

export const ContactIcons: Record<string, ContactIconConfig> = {
  phone: {
    icon: FaPhone,
    link: "tel:+917305418685",
  },
  email: {
    icon: MdEmail,
    link: "mailto:sakthivelan.shankar@gmail.com",
  },
  linkedin: {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/sakthivelan-sankar-5a7215318/",
  },
  github: {
    icon: FaGithub,
    link: "https://github.com/Sakthivelan2005/",
  },
  figma: {
    icon: FaFigma,
    link: "https://www.figma.com/files/team/1449320475449389686/recents-and-sharing?fuid=1449320473678665095"
  },
  insta: {
    icon: FaInstagram,
    link: "https://www.instagram.com/sakthivelan_2k_kid/",
  }
};


export interface ContactInfoItem {
  icon: IconType;
  text: string;
  link?: string;
}

export const ContactInfo: ContactInfoItem[] = [
  {
    icon: FaPhone,
    text: "+91 7305418685",
    link: "tel:+917305418685",
  },
  {
    icon: MdEmail,
    text: "sakthivelan.shankar@gmail.com",
    link: "mailto:sakthivelan.shankar@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    text: "Pattinathar St, JJ Nagar East, Mogappair, Chennai, Tamil Nadu, India",
    link: "https://maps.app.goo.gl/zJzvt1jnFSspQ5Xz9",
  },
  {
    icon: FaBirthdayCake,
    text: "October 16, 2005",
  },
];