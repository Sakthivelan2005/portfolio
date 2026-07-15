import { motion, useMotionValue} from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiMysql, SiPhp, SiOracle, SiPython } from "react-icons/si";
import styles from "./Hero.module.css";
import { role } from "../data/Roles";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hero: React.FC = () => {
  const ResumeURL =
    "https://drive.google.com/file/d/1fF4-nGfUcD-SjB6xY6MlBhuuwcScDumw/view?usp=sharing";
    const context = useContext(ThemeContext);
    const theme = context ? context.theme : "light";

  // Mouse interaction
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className={styles.hero}>
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.left}
      >
        <h1>
          Hi, I'm <span>Sakthivelan</span>
        </h1>

        <h2>{role}</h2>

        <p>
         BCA graduate (8.97 CGPA) with a strong foundation in Object-Oriented Design, data structures, and complexity analysis. I leverage Python, Node.js, and relational databases to engineer scalable, efficient backend systems. Committed to delivering high-quality software by strictly applying DRY and KISS principles.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>

          <a
            href={ResumeURL}
            target="_blank"
            rel="noopener noreferrer"
            className={theme === "dark" ? styles.secondaryBtnDark : styles.secondaryBtnLight}
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE FLOATING ICONS */}
       <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.right}
      >
        <motion.div
          className={styles.iconReact}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaReact />
        </motion.div>

        <motion.div
          className={styles.iconNode}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <FaNodeJs />
        </motion.div>
        <motion.div
          className={styles.iconMysql}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <SiMysql />
        </motion.div>
        <motion.div
          className={styles.iconPython}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <SiPython />
        </motion.div>
        <motion.div
          className={styles.iconPhp}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <SiPhp />
        </motion.div>
        <motion.div
          className={styles.iconOracle}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <SiOracle />
        </motion.div>

        <motion.div
          className={styles.iconMongo}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <SiMongodb />
        </motion.div>

        <motion.div
          className={styles.iconTs}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <SiTypescript />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
