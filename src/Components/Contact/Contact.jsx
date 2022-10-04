import styles from "../../styles/Contact.module.css";
import { motion } from "framer-motion";
import Button from "../UI/Button";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div>
        <motion.h2
          initial={{ x: -90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Contact
        </motion.h2>
        <motion.span
          initial={{ x: 90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <a href="https://wa.me/88214455616" target="__blank">
            Whats app
          </a>
          <a href="mailto:ahmaddedensetiawan98@gmail.com">
            <Button type="button">Email me</Button>
          </a>
        </motion.span>
      </div>
    </div>
  );
};

export default Contact;
