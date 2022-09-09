import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>{/* <img src="" alt="" /> */}</div>
          <h1>Ahmad Deden Setiawan</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
