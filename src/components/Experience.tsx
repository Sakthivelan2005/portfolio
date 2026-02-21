import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { experiences } from "../data/Experience";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Experience: React.FC = () => {
const context = useContext(ThemeContext);
const theme = context ? context.theme : "light";
  return (
    <section className={styles.section} id="experience">
      <h2>Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.main
            key={index}
            className={styles.card}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.header}>
              <img
                src={exp.logo[theme === "dark" ? "dark" : "light"]}
                alt={exp.company}
                className={styles.logo}
              />

              <div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span>{exp.period}</span>
              </div>
            </div>

            <p>{exp.description}</p>
          </motion.main>
        ))}
      </div>
    </section>
  );
};

export default Experience;
