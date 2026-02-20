import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiOracle,
} from "react-icons/si";
import { type IconType } from "react-icons";

interface IconConfig {
  icon: IconType;
  color: string;
}

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