import styles from "../../styles/Header.module.css";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>{/* <img src="" alt="" /> */}</div>
          <h1>AhmadDedenSetiawan</h1>
        </div>
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
