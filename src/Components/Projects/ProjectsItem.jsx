import angleRight from "../../images/angle-right-solid.svg";

const ProjectsItem = (props) => {
  return (
    <div id={props.id}>
      <div>
        <img src={props.image} alt="project" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <a href={props.link}>
          <p>View details</p>
          <span>
            <img src={angleRight} alt="angle right" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectsItem;
