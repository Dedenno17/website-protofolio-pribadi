import { useState } from "react";
import Header from "./Components/Header/Header";
import NavLink from "./Components/Header/NavLink";
import Hero from "./Components/Hero/Hero";

function App() {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  const hamMenuToggleHandler = () => {
    setIsHamMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header hamMenuToggle={hamMenuToggleHandler} onOpen={isHamMenuOpen} />
      <main>
        <Hero />
      </main>
      <NavLink onOpen={isHamMenuOpen} />
    </div>
  );
}

export default App;
