import styles from "../../styles/Contact.module.css";
import Button from "../UI/Button";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <h2>Contact</h2>
      <span>
        <a href="https://wa.me/88214455616" target="__blank">
          Whats app
        </a>
        <a href="mailto:ahmaddedensetiawan98@gmail.com">
          <Button type="button">Email me</Button>
        </a>
      </span>
    </div>
  );
};

export default Contact;
