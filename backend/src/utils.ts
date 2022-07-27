import { Shaft } from "./elevator-manager";

export function getRandomFloors(
  numberOfShafts: number,
  numberOfFloors: number
): number[] {
  return [...Array(numberOfShafts)].map((_) =>
    Math.round(Math.random() * (numberOfFloors - 1))
  );
}

function shaftHasNotMovingElevator(shaft: Shaft) {
  return shaft.from === shaft.to;
}

export function checkIfElevatorIsValid(shaft: Shaft): boolean {
  if (shaftHasNotMovingElevator(shaft)) {
    return true;
  } else {
    return false;
  }
}
