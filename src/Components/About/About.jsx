import Button from "../UI/Button";
import profile from "../../images/profile.png";
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam elit
          vel, ultrices diam. Libero sed justo ultrices dictumst penatibus
          interdum urna. Urna sit gravida fames rhoncus sit tortor adipiscing
          ut. Adipiscing pretium vitae fringilla faucibus{" "}
        </p>
        <Button type="button">Download CV</Button>
      </div>
      <div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default About;
