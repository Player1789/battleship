import reducer, {
  initialGameState,
  gameActions,
} from "../../../features/game/gameSlice";

describe("gameInitialized reducer", () => {
  describe("should initialize state", () => {
    const state = reducer(undefined, gameActions.gameInitialized());

    describe("map state should be initialized properly", () => {
      expect(state.map).not.toEqual({});
      const mapKeys = Object.keys(state.map);
      test("maps hit count should be false", () => {
        mapKeys.forEach((key) => {
          expect(state.map[key as keyof typeof state.map].hit).toBeFalsy();
        });
      });
      test("maps number of key should be the same as the number of totalShipsSize", () => {
        let totalShipsSize = 0;
        state.ships.forEach((ship) => (totalShipsSize += ship.size));
        expect(mapKeys.length).toEqual(totalShipsSize);
      });
    });

    test("ships have positions according to their size", () => {
      expect(
        state.ships.find((ship) => ship.positions.length !== ship.size)
      ).toBeFalsy();
    });

    test("map size and players should be the same as initialGameState", () => {
      expect(state.mapSize).toEqual(initialGameState.mapSize);
      expect(state.players).toEqual(initialGameState.players);
    });

    test("game status should be ongoing", () => {
      expect(state.status).toEqual("ongoing");
    });

    test("turn should start at 0", () => {
      expect(state.turn).toEqual(0);
    });
  });
});
