import styles from "../../styles/Contact.module.css";
import Button from "../UI/Button";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <span>
        <a href="/">Whats app</a>
        <Button type="button">Email me</Button>
      </span>
    </div>
  );
};

export default Contact;
