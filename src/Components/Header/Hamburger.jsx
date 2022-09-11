import styles from "../../styles/Hamburger.module.css";

const Hamburger = (props) => {
  const classes = props.onOpen
    ? `${styles.hamburger} ${styles.open}`
    : `${styles.hamburger}`;

  return (
    <div className={classes} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
