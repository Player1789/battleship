import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectGameState } from "../../features/game/gameSlice";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = () => {
  const { players } = useAppSelector(selectGameState);

  return (
    <div className={styles.group}>
      {players.map((player, index) => (
        <div className={styles.board} style={{ backgroundColor: player.color }}>
          <div className={styles.score}>
            {player.score >= 10 ? player.score : `0${player.score}`}
          </div>
          <div className={styles.divider} />
          <div className={styles.name}>player {index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;
