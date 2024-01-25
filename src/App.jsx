import React, { useState } from "react";
import StartGame from "./components/StartGame";
import Gameplay from "./components/Gameplay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
};

export default App;
