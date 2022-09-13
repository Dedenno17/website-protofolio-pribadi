import angleRight from "../../images/angle-right-solid.svg";
import styles from "../../styles/ProjectsItem.module.css";

const ProjectsItem = (props) => {
  return (
    <div id={props.id} className={styles.projectsItem}>
      <div>
        <img src={props.image} alt="project" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <span>
          <a href={props.link}>View details</a>
          <img src={angleRight} alt="angle right" />
        </span>
      </div>
    </div>
  );
};

export default ProjectsItem;
