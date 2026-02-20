import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, toggleTheme } = context;

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  const navLinks = [
    "Experience",
    "Skills",
    "Projects",
    "Blog",
    "Contact",
  ];

  return (
    <motion.nav
      className={styles.navbar}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={theme === "dark" ? styles.logoDark : styles.logoLight}
      >
        Sakthivelan S
      </motion.div>

      <div className={theme === "dark" ? styles.linksDark : styles.linksLight}>
        {navLinks.map((link, index) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {link}
          </motion.a>
        ))}

        {/* Animated Theme Button */}
       <motion.button
  onClick={toggleTheme}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.9 }}
  className={
    theme === "dark" ? styles.toggleDark : styles.toggleLight
  }
>
  <motion.span
    animate={{ rotate: theme === "dark" ? 180 : 0 }}
    transition={{ duration: 0.4 }}
    style={{ display: "inline-block", marginRight: "6px" }}
  >
    {theme === "dark" ? "☀" : "🌙"}
  </motion.span>

  {theme === "dark" ? "Light" : "Dark"}
</motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;