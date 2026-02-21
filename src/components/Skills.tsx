import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import { skills } from "../data/Skills";
import { Icons } from "../config/Icons";
const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Technical Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

/* Separate SkillCard Component */

interface Skill {
  name: string;
  level: number;
}

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {

  
const iconConfig = Icons[skill.name];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, skill.level, {
        duration: 1.2,
        ease: "easeOut",
        onUpdate(value) {
          setDisplay(Math.floor(value));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, count, skill.level]);

  return (
    <motion.main
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ scale: 1.03 }}
    >
     <div className={styles.header}>
  <div className={styles.skillInfo}>
    {iconConfig && (
  <iconConfig.icon
    className={styles.skillIcon}
    style={{ color: iconConfig.color }}
  />
)}
    <span>{skill.name}</span>
  </div>

  <span className={styles.percent}>{display}%</span>
</div>

      <div className={styles.progressContainer}>
        <motion.div
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </motion.main>
  );
};