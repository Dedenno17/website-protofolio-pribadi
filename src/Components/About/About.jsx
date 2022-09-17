import Button from "../UI/Button";
import profile from "../../images/profile.png";
import styles from "../../styles/About.module.css";
import resume from "../../images/Resume.pdf";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div>
        <h2>About me</h2>
        <p>
          Create an attractive & interactive website display, by mastering
          several tools that support the development of a web application & has
          been certified by parties who have credibility on web development
          field{" "}
        </p>
        <a href={resume} download="resume">
          <Button type="button">Download CV</Button>
        </a>
      </div>
      <div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default About;
