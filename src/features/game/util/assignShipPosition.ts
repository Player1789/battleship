import { shipType } from "../gameSlice";

export default function assignShipPosition(
  ships: shipType[],
  mapSize: [number, number],
  map: {
    [key: string]: {
      ship: string | null;
      hit: boolean;
    };
  }
) {
  const set = new Set<string>();
  ships.forEach((ship) => {
    if (!assignPosition(ship, set, mapSize)) {
      throw Error("Failed to create map!");
    }
  });
  ships.forEach((ship) => {
    ship.positions.forEach((position) => {
      map[position.toString()] = { ship: ship.name, hit: false };
    });
  });
}

function assignPosition(
  ship: shipType,
  set: Set<string>,
  mapSize: [number, number]
): boolean {
  for (let i = 0; i < 100; ++i) {
    if (getRandomPosition(ship, set, mapSize)) {
      return true;
    }
  }
  return false;
}

function getRandomPosition(
  ship: shipType,
  set: Set<string>,
  mapSize: [number, number]
): boolean {
  const shipSize = ship.size;
  const maxXIndex = mapSize[0] - 1;
  const maxYIndex = mapSize[1] - 1;

  for (let i = 0; i < 100; ++i) {
    let isVertical = Math.random() < 0.5;
    const xIndex = isVertical
      ? Math.round(Math.random() * maxXIndex)
      : Math.round(Math.random() * (maxXIndex - shipSize));
    const yIndex = isVertical
      ? Math.round(Math.random() * (maxYIndex - shipSize))
      : Math.round(Math.random() * maxYIndex);
    if (isPositionValid(shipSize, xIndex, yIndex, set, isVertical)) {
      for (let j = 0; j < shipSize; ++j) {
        const x = isVertical ? xIndex : xIndex + j;
        const y = isVertical ? yIndex + j : yIndex;
        const position: [number, number] = [x, y];
        ship.positions.push(position);
        set.add(position.toString());
      }
      return true;
    }
  }
  return false;
}

function isPositionValid(
  shipSize: number,
  xIndex: number,
  yIndex: number,
  set: Set<string>,
  isVertical: boolean
): boolean {
  for (let i = 0; i < shipSize; ++i) {
    const x = isVertical ? xIndex : xIndex + i;
    const y = isVertical ? yIndex + i : yIndex;
    if (set.has([x, y].toString())) {
      return false;
    }
  }
  return true;
}
