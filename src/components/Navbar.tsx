import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <nav className={styles.navbar}>
      <div className={theme === "dark" ? styles.logoDark : styles.logoLight}>Sakthivelan S</div>

      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>

        <button onClick={toggleTheme} className={styles.toggle}>
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
