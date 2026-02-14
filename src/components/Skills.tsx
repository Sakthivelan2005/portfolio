import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Express",
  "PHP",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
