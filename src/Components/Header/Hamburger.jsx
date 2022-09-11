import styles from "../../styles/Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <div className={styles.hamburger} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
