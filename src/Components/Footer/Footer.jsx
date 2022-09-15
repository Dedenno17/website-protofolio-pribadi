import profile from "../../images/profile.png";
import facebook from "../../images/facebook-f.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin-in.svg";
import github from "../../images/github.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <img src={profile} alt="profile" />
          </div>
          <div>
            <h2>Ahmad Deden Setiawan</h2>
            <p>Front-End Web Developer</p>
          </div>
        </div>
        <div>
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
              <img src={facebook} alt="fb" />
            </li>
            <li>
              <img src={instagram} alt="ig" />
            </li>
            <li>
              <img src={linkedin} alt="in" />
            </li>
            <li>
              <img src={github} alt="github" />
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
