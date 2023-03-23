import angleRight from '../../images/angle-right-solid.svg';
import styles from '../../styles/ProjectsItem.module.css';

const ProjectsItem = (props) => {
  return (
    <div id={props.id} className={styles.projectsItem}>
      <div onClick={() => console.log(props.title)}>
        <a href={props.link}>
          <img src={props.image} alt="project" />
        </a>
      </div>
      <div>
        <h3>
          <a href={props.link}>{props.title}</a>
        </h3>
        <span>
          <a href={props.link} target="__blank">
            View details
          </a>
          <img src={angleRight} alt="angle right" />
        </span>
      </div>
    </div>
  );
};

export default ProjectsItem;
