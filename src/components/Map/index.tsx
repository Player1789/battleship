import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectGameState } from "../../features/game/gameSlice";
import Cell from "./Cell";
import styles from "./Map.module.css";

const Map = () => {
  const { mapSize, turn, players } = useAppSelector(selectGameState);

  const cells = [];
  for (let y = 0; y < mapSize[1]; ++y) {
    for (let x = 0; x < mapSize[0]; ++x) {
      cells.push(<Cell x={x} y={y} />);
    }
  }

  return (
    <div className={styles.map} style={{ borderColor: players[turn].color }}>
      {cells}
    </div>
  );
};

export default Map;
