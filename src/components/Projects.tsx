import styles from "./Projects.module.css";
import { projects } from "../data/project";

const Projects: React.FC = () => {
  return (
    <section className={styles.section} id="projects">
      <h2>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <main key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <p className={styles.tech}>{project.tech}</p>
            <p>{project.description}</p>
            <a href={project.github} target="_blank">
              View Code
            </a>
          </main>
        ))}
      </div>
    </section>
  );
};

export default Projects;
