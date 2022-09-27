import styles from "../../styles/Projects.module.css";
import ProjectsItem from "./ProjectsItem";

// images
import colorGuess from "../../images/color-guess.png";
import foodOrder from "../../images/food-order.png";
import memoryGame from "../../images/memory-game.png";
import todo from "../../images/to-do.png";
import Carousel from "./Carousel";

const dataProjects = [
  {
    id: Math.random() + 1 + "",
    title: "Color Guessing Game",
    image: colorGuess,
    link: "https://deden-color-guessing-game-react-app.netlify.app/",
  },
  {
    id: Math.random() + 1 + "",
    title: "Simple Food Order App",
    image: foodOrder,
    link: "https://deden-food-order-app.netlify.app/",
  },
  {
    id: Math.random() + 1 + "",
    title: "Memory Game",
    image: memoryGame,
    link: "https://deden-memory-game-react.netlify.app/",
  },
  {
    id: Math.random() + 1 + "",
    title: "To do App",
    image: todo,
    link: "https://deden-todo-react-app.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div>
        {dataProjects.map((item) => (
          <ProjectsItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
      <div>
        <Carousel dataProjects={dataProjects} />
      </div>
    </div>
  );
};

export default Projects;
