import { motion, useMotionValue} from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import styles from "./Hero.module.css";
import { role } from "../data/Roles";
import { useEffect } from "react";

const Hero: React.FC = () => {
  const ResumeURL =
    "https://drive.google.com/file/d/1nvfqsgV73FAVEa3Vw7MRDFEY6BTzq7KM/view?usp=sharing";

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
          I am a BCA Student (CGPA 8.85) with strong foundation in OOPS, Data
          Structures, MERN Stack and Backend Development. I build complete
          end-to-end web and mobile applications using React, TypeScript,
          Node.js and MongoDB.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>

          <a
            href={ResumeURL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
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
