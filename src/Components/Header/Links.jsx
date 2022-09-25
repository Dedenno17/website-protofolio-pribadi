import styles from "../../styles/Links.module.css";

const links = [
  { title: "Home", slug: "home" },
  { title: "Projects", slug: "projects" },
  { title: "Contact", slug: "contact" },
  { title: "About me", slug: "about" },
];

export default function Links() {
  return (
    <nav className={styles.links}>
      <ul>
        {links.map((item, i) => (
          <li key={Math.random() + i + ""}>
            <a href={`#${item.slug}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
