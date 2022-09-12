import profile from "../../images/profile.png";
import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
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
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Rutrum
          <br /> sed at dictumst integer
        </p>
        <button type="button">Contact</button>
      </div>
    </div>
  );
};

export default Hero;
