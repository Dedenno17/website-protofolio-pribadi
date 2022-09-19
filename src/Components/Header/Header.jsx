import { useEffect, useState, useCallback } from "react";
import styles from "../../styles/Header.module.css";
import Hamburger from "./Hamburger";
import profileImage from "../../images/profile.png";

const Header = (props) => {
  const [scrollY, setScrollY] = useState(null);

  const scrollHandler = useCallback(function () {
    setScrollY(this.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, [scrollHandler]);

  return (
    <header
      className={
        scrollY > 200 ? `${styles.header} ${styles.fixed}` : `${styles.header}`
      }
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>
            <img src={profileImage} alt="profile" />
          </div>
          <h1>AhmadDedenSetiawan</h1>
        </div>
        <Hamburger onClick={props.hamMenuToggle} onOpen={props.onOpen} />
      </div>
    </header>
  );
};

export default Header;
