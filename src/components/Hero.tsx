import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
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

        <h2>Student</h2>

        <p>
          I build complete end-to-end web and mobile applications using
          React, TypeScript, Node.js and MongoDB.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>

          <a href="/resume.pdf" className={styles.secondaryBtn}>
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
