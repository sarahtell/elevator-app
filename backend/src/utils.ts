import { Shaft } from "./elevator-manager";

export function getRandomFloors(
  numberOfShafts: number,
  numberOfFloors: number
): number[] {
  return [...Array(numberOfShafts)].map((_) =>
    Math.round(Math.random() * (numberOfFloors - 1))
  );
}

export function checkIfElevatorIsValid(
  shaft: Shaft,
  buttonClickFloor: number
): boolean {
  const movingToFloorDirection = Math.sign(shaft.from - shaft.to);
  const buttonClickDirection = Math.sign(shaft.from - buttonClickFloor);
  if (
    movingToFloorDirection * buttonClickDirection > 0 ||
    shaft.from === shaft.to
  ) {
    return true;
  } else {
    return false;
  }
}
