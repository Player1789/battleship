import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { gameActions, selectGameState } from "../../features/game/gameSlice";
import styles from "./StartModal.module.css";

const StartModal = () => {
  const { gameInitialized } = gameActions;
  const { status: gameStatus } = useAppSelector(selectGameState);
  const dispatch = useAppDispatch();

  if (gameStatus !== "prestart") {
    return null;
  }

  const onButtonClick = () => {
    dispatch(gameInitialized());
  };

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h2>Do you want to start the game?</h2>
        <button className={styles.button} onClick={onButtonClick}>
          PLAY
        </button>
      </div>
    </div>
  );
};

export default StartModal;
