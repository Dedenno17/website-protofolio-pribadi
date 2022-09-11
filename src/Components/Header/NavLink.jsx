import { createPortal } from "react-dom";
import styles from "../../styles/NavLink.module.css";

const NavLinkContainer = document.getElementById("navlink");

const NavLink = () => {
  return createPortal(
    <nav className={styles.nav}>
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
          <a href="/">About me</a>
        </li>
      </ul>
    </nav>,
    NavLinkContainer
  );
};

export default NavLink;
