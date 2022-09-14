import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <span>
        <a href="/">Whats app</a>
        <button>Email me</button>
      </span>
    </div>
  );
};

export default Contact;
