import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import reducers from "./reducers";

export type shipType = {
  name: string;
  size: number;
  pointPerShot: number;
  positions: [number, number][];
  hitCount: number;
};

export interface GameState {
  status: "prestart" | "ongoing" | "finish";
  turn: number;
  players: { score: number; color: string }[];
  mapSize: [number, number];
  map: {
    [key: string]: {
      ship: string | null;
      hit: boolean;
    };
  };
  ships: shipType[];
}

export const initialGameState: GameState = {
  status: "prestart",
  turn: 0,
  players: [
    { score: 0, color: "orange" },
    { score: 0, color: "lightseagreen" },
  ],
  mapSize: [10, 10],
  map: {},
  ships: [
    {
      name: "carrier",
      size: 5,
      positions: [],
      hitCount: 0,
      pointPerShot: 1,
    },
    {
      name: "battleship",
      size: 4,
      positions: [],
      hitCount: 0,
      pointPerShot: 1,
    },
    {
      name: "cruiser",
      size: 3,
      positions: [],
      hitCount: 0,
      pointPerShot: 1,
    },
    {
      name: "submarine",
      size: 3,
      positions: [],
      hitCount: 0,
      pointPerShot: 1,
    },
    {
      name: "destroyer",
      size: 2,
      positions: [],
      hitCount: 0,
      pointPerShot: 1,
    },
  ],
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers,
});

export const gameActions = gameSlice.actions;
export const selectGameState = (state: RootState) => state.game;

export default gameSlice.reducer;
