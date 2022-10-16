import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { gameActions, selectGameState } from "../../features/game/gameSlice";
import ScoreBoard from "../ScoreBoard";
import styles from "../StartModal/StartModal.module.css";

const FinishModal: React.FC = () => {
  const { gameInitialized } = gameActions;
  const { status: gameStatus, players } = useAppSelector(selectGameState);
  const dispatch = useAppDispatch();

  if (gameStatus !== "finish") {
    return null;
  }

  const onButtonClick = () => {
    dispatch(gameInitialized());
  };

  let text = "";
  if (players[0].score === players[1].score) {
    text = "Draw!";
  } else {
    text = "Winner is ";
    text += players[0].score > players[1].score ? "player 1" : "player 2";
  }

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <ScoreBoard />
        <h2>
          {text}
          <br />
          Do you want to play again?
        </h2>
        <button className={styles.button} onClick={onButtonClick}>
          PLAY
        </button>
      </div>
    </div>
  );
};

export default FinishModal;
