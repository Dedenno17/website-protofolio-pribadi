import { useState } from "react";
import Header from "./Components/Header/Header";

function App() {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  const hamMenuToggleHandler = () => {
    setIsHamMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header onOpen={isHamMenuOpen} hamMenuToggle={hamMenuToggleHandler} />
    </div>
  );
}

export default App;
