import profile from "../../images/profile.png";
import facebook from "../../images/facebook-f.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin-in.svg";
import github from "../../images/github.svg";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.title}>
          <div>
            <img src={profile} alt="profile" />
          </div>
          <div>
            <h2>Ahmad Deden Setiawan</h2>
            <p>Front-End Web Developer</p>
          </div>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/ahmaddeden.setiawan.7"
                target="__blank"
              >
                <img src={facebook} alt="fb" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ahmaddedens/" target="__blank">
                <img src={instagram} alt="ig" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ahmad-deden-setiawan-094a311bb/"
                target="__blank"
              >
                <img src={linkedin} alt="in" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Dedenno17" target="__blank">
                <img src={github} alt="github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span>
        <p>&copy; 2022 Ahmad Deden Setiawan. All right reserved</p>
      </span>
    </footer>
  );
};

export default Footer;
