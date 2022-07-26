import { Shaft } from "./elevator-manager";

export function getRandomFloors(
  numberOfShafts: number,
  numberOfFloors: number
): number[] {
  return [...Array(numberOfShafts)].map((_) =>
    Math.round(Math.random() * (numberOfFloors - 1))
  );
}

function shaftHasMovingElevator(shaft: Shaft) {
  return shaft.from === shaft.to;
}

export function checkIfElevatorIsValid(shaft: Shaft): boolean {
  if (shaftHasMovingElevator(shaft)) {
    return true;
  } else {
    return false;
  }
}
