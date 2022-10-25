import profile from "../../images/profile-foto.webp";
import styles from "../../styles/Hero.module.css";
import Button from "../UI/Button";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const descVariant = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delayChildren: 1.5,
      },
    },
  };

  const dragValue = {
    top: 10,
    right: 10,
    left: -40,
    bottom: 10,
  };

  return (
    <div className={styles.hero} id="home">
      <div className={styles.image}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
        ></motion.div>
        <motion.img
          src={profile}
          alt="hero profile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          drag
          dragConstraints={dragValue}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          drag
          dragConstraints={dragValue}
        ></motion.div>
      </div>
      <motion.div
        className={styles.desc}
        variants={descVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={descVariant}>
          <Typewriter
            options={{
              strings: ["Hello, I’m Ahmad Deden Setiawan"],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
        <motion.div variants={descVariant}>
          <p>Front-End Web Developer</p>
        </motion.div>
        <motion.p variants={descVariant}>
          Indonesian developer who build beautiful and interactive web
          applications using popular frameworks and tools
        </motion.p>
        <motion.a href="#contact" variants={descVariant}>
          <Button type="button">Contact</Button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
