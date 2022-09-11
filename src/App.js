import { useState } from "react";
import Header from "./Components/Header/Header";
import NavLink from "./Components/Header/NavLink";

function App() {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  const hamMenuToggleHandler = () => {
    setIsHamMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header onOpen={isHamMenuOpen} hamMenuToggle={hamMenuToggleHandler} />
      <NavLink />
    </div>
  );
}

export default App;
