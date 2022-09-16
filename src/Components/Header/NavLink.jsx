import { createPortal } from "react-dom";
import styles from "../../styles/NavLink.module.css";

const NavLinkContainer = document.getElementById("navlink");

const links = [
  { title: "Home", slug: "home" },
  { title: "Projects", slug: "projects" },
  { title: "Contact", slug: "contact" },
  { title: "About me", slug: "about" },
];

const NavLink = (props) => {
  const classes = props.onOpen
    ? `${styles.nav} ${styles.open}`
    : `${styles.nav}`;

  return createPortal(
    <nav className={classes}>
      <ul>
        {links.map((item, i) => (
          <li key={Math.random() + i + ""} onClick={props.hamMenuToggle}>
            <a href={`#${item.slug}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>,
    NavLinkContainer
  );
};

export default NavLink;
