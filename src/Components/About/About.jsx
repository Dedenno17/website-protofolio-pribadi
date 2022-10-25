import { motion } from "framer-motion";

import Button from "../UI/Button";
import profile from "../../images/profile-foto.webp";
import styles from "../../styles/About.module.css";
import resume from "../../images/Resume.pdf";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2>About me</h2>
          <p>
            Create an attractive & interactive website display, by mastering
            several tools that support the development of a web application &
            has been certified by parties who have credibility on web
            development field{" "}
          </p>
          <a href={resume} download="resume">
            <Button type="button">Download CV</Button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img src={profile} alt="profile" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
