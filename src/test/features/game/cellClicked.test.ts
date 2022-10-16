import reducer, {
  initialGameState,
  gameActions,
} from "../../../features/game/gameSlice";

describe("cellClicked reducer", () => {
  const initializedState = reducer(undefined, gameActions.gameInitialized());
  describe("after clicking once", () => {
    const clickedOnceState = reducer(
      initializedState,
      gameActions.cellClicked({ x: 0, y: 0 })
    );
    test("should update turn", () => {
      expect(clickedOnceState.turn).toEqual(1);
    });
    test("gameStatus should be ongoing", () => {
      expect(clickedOnceState.status).toEqual("ongoing");
    });
    test("totalClickedCellCount should be 1", () => {
      let totalClickedCount = 0;
      Object.keys(clickedOnceState.map).forEach((key) => {
        if (clickedOnceState.map[key as keyof typeof clickedOnceState].hit) {
          totalClickedCount++;
        }
      });
      expect(totalClickedCount).toEqual(1);
    });
  });

  describe("after clicking every cell", () => {
    let finalState = reducer(undefined, gameActions.gameInitialized());
    for (let x = 0; x < initialGameState.mapSize[0]; ++x) {
      for (let y = 0; y < initialGameState.mapSize[1]; ++y) {
        finalState = reducer(finalState, gameActions.cellClicked({ x, y }));
      }
    }

    test("status should be finished", () => {
      expect(finalState.status).toEqual("finish");
    });

    const mapKey = Object.keys(finalState.map);
    test("every cell should be hitted", () => {
      mapKey.forEach((key) => {
        expect(
          finalState.map[key as keyof typeof finalState.map].hit
        ).toBeTruthy();
      });
    });

    test("every ship's position should be hitted", () => {
      finalState.ships.forEach((ship) =>
        expect(ship.positions.length).toEqual(ship.hitCount)
      );
    });

    test("number of ship positions and score should be the same", () => {
      let shipsPositionTotalScore = 0;
      let playersScore = 0;

      finalState.ships.forEach(
        (ship) =>
          (shipsPositionTotalScore += ship.positions.length * ship.pointPerShot)
      );
      finalState.players.forEach((player) => (playersScore += player.score));
      expect(shipsPositionTotalScore).toEqual(playersScore);
    });
  });
});
