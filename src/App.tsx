import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import Ships from "./components/Ships";
import StartModal from "./components/StartModal";

function App() {
  return (
    <div className="App">
      <ScoreBoard />
      <Ships />
      <StartModal />
    </div>
  );
}

export default App;
