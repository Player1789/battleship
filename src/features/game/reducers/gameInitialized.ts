import { GameState } from "../gameSlice";
import assignShipPosition from "../util/assignShipPosition";

const gameInitialized = (state: GameState) => {
  state.map = {};
  state.players.forEach((player) => {
    player.score = 0;
  });
  state.turn = 0;
  state.ships.forEach((ship) => {
    ship.hitCount = 0;
    ship.positions = [];
  });
  state.status = "ongoing";
  assignShipPosition(state.ships, state.mapSize, state.map);
};

export default gameInitialized;
