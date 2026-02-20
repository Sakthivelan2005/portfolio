import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { skills } from "../data/Skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Technical Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.header}>
              <span>{skill.name}</span>
              <span className={styles.percent}>{skill.level}%</span>
            </div>

            <div className={styles.progressContainer}>
              <motion.div
                className={styles.progressBar}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
