import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import Ships from "./components/Ships";
import StartModal from "./components/StartModal";
import styles from "./App.module.css";
import Map from "./components/Map";
import FinishModal from "./components/FinishModal";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.info}>
        <ScoreBoard />
        <Ships />
      </div>
      <Map />
      <StartModal />
      <FinishModal />
    </div>
  );
}

export default App;
