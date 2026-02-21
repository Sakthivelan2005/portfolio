import styles from "./Contact.module.css";
import { ContactIcons, ContactInfo } from "../config/Icons";
import { motion } from "framer-motion";
import { SocialImage } from "../config/Images";

const Contact: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className={styles.footer} id="contact">
      
      {/* Title Section */}
      <motion.h2
  className={styles.title}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Let’s Connect
  <motion.img
    src={SocialImage}
    alt="Connect"
    className={styles.titleIcon}
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
  />
</motion.h2>

      {/* Contact Info */}
      <motion.div
        className={styles.contactInfo}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ContactInfo.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.iconWrapper}>
                <IconComponent />
              </div>

              <span>{item.text}</span>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className={styles.socialRow}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        {Object.entries(ContactIcons).map(([key, value]) => {
          const IconComponent = value.icon;

          return (
            <motion.a
              key={key}
              href={value.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={styles.socialIcon}
            >
              <IconComponent />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Sakthivelan S | Built with React ⚛️
      </div>
    </footer>
  );
};

export default Contact;