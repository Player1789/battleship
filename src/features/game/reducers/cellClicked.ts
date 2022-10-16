import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../gameSlice";

interface IProps {
  x: number;
  y: number;
}

const cellClicked = (state: GameState, action: PayloadAction<IProps>) => {
  const { x, y } = action.payload;
  const positionString = [x, y].toString();
  const cellData = state.map[positionString];
  if (cellData) {
    if (!cellData.hit) {
      cellData.hit = true;
      const hittedShip = state.ships.find(
        (ship) => ship.name === cellData.ship
      );
      if (hittedShip) {
        hittedShip.hitCount++;
        state.players[state.turn].score += hittedShip.pointPerShot;
      }

      let isGameFinished = true;
      state.ships.forEach((ship) => {
        if (ship.hitCount !== ship.size) {
          isGameFinished = false;
        }
      });
      if (isGameFinished) {
        state.status = "finish";
      }
    }
  } else {
    state.map[positionString] = { hit: true, ship: null };
  }
  state.turn = state.turn + 1 === state.players.length ? 0 : state.turn + 1;
};

export default cellClicked;
