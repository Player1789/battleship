import React from "react";
import { useAppSelector } from "../../app/hooks";
import { gameActions, selectGameState } from "../../features/game/gameSlice";
import styles from "./Map.module.css";
import miss from "../../assets/Miss.png";
import hit from "../../assets/Hit.png";
import { useDispatch } from "react-redux";

interface IProps {
  x: number;
  y: number;
}

const Cell: React.FC<IProps> = ({ x, y }) => {
  const { map } = useAppSelector(selectGameState);
  const dispatch = useDispatch();
  const { cellClicked } = gameActions;

  const cellData = map[[x, y].toString()];

  let backgroundImage;
  if (!cellData || !cellData.hit) {
    backgroundImage = undefined;
  } else if (cellData.ship) {
    backgroundImage = `url(${hit})`;
  } else {
    backgroundImage = `url(${miss})`;
  }

  const onClick = () => {
    if (!cellData || !cellData.hit) {
      dispatch(cellClicked({ x, y }));
    }
  };

  return (
    <div
      className={styles.cell}
      style={{
        cursor: backgroundImage ? undefined : "pointer",
        backgroundImage: backgroundImage,
      }}
      onClick={onClick}
    />
  );
};

export default Cell;
