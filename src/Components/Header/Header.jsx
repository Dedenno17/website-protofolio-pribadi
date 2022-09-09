import styles from "../../styles/Header.module.css";
import Hamburger from "./Hamburger";
import profileImage from "../../images/profile.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>
            <img src={profileImage} alt="profile" />
          </div>
          <h1>AhmadDedenSetiawan</h1>
        </div>
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
