import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>

      <h2>Projects</h2>

      <div className={styles.card}>
        <h3>Tailor Junction</h3>
        <p>Mobile tailoring service app with full backend integration.</p>
      </div>

      <div className={styles.card}>
        <h3>Kirana Fashion</h3>
        <p>E-commerce website with authentication & cart system.</p>
      </div>
    </section>
  );
};

export default Projects;
