import profile from "../../images/profile.png";
import styles from "../../styles/Hero.module.css";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      <div className={styles.image}>
        <div></div>
        <img src={profile} alt="hero profile" />
        <div></div>
        <div></div>
      </div>
      <div className={styles.desc}>
        <h2>Hello, I’m Ahmad Deden Setiawan</h2>
        <div>
          <p>Front-End Web Developer</p>
        </div>
        <p>
          Indonesian developer who build beautiful and interactive web
          applications using popular frameworks and tools
        </p>
        <a href="#contact">
          <Button type="button">Contact</Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
