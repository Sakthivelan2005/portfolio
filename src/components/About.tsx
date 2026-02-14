import { motion } from "framer-motion";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer and 2nd-year undergraduate
          student building scalable web and mobile applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
