import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectGameState } from "../../features/game/gameSlice";
import styles from "./Ships.module.css";
import hit from "../../assets/Hit small.png";
import miss from "../../assets/Miss small.png";
import aircraft from "../../assets/Aircraft Shape.png";
import battleship from "../../assets/Battleship Shape.png";
import cruiser from "../../assets/Cruiser Shape.png";
import submarine from "../../assets/Submarine Shape.png";
import carrier from "../../assets/Carrier Shape.png";

const Ships: React.FC = () => {
  const { ships } = useAppSelector(selectGameState);
  const shipImgs = [aircraft, battleship, cruiser, submarine, carrier];

  const rows: JSX.Element[] = [];
  ships.forEach((ship, index) => {
    const hits: JSX.Element[] = [];
    for (let i = 0; i < ship.size; ++i) {
      const backgroundImage =
        ship.hitCount > i ? `url(${hit})` : `url(${miss})`;
      hits.push(
        <div
          className={styles.hit}
          style={{ backgroundImage: backgroundImage }}
        />
      );
    }

    const row = (
      <div className={styles.row}>
        <div
          className={styles.ship}
          style={{ backgroundImage: `url(${shipImgs[index]})` }}
        />
        <div className={styles.hitBoard}>{hits}</div>
      </div>
    );
    rows.push(row);
  });

  return <div className={styles.container}>{rows}</div>;
};

export default Ships;
