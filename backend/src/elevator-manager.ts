import { checkIfElevatorIsValid, getRandomFloors } from "./utils";

export type Shaft = {
  from: number;
  to: number;
};

export default class ElevatorManager {
  public shafts: Shaft[] = [];


  constructor() {}

  initialize(numberOfShafts: number, numberOfFloors: number) {
    const randomFloors = getRandomFloors(numberOfShafts, numberOfFloors);
    this.shafts = randomFloors.map((floor) => {
      return { from: floor, to: floor, elevatorIsMoving: false };
    });
  }

  updateShaft(shafts: Shaft[]) {
    this.shafts = shafts;
  }

  getClosestValidElevator(buttonClickFloor: number) {
    const elevatorFloors = this.shafts.map((s) => s.from);
    const distances = elevatorFloors.map((x, i) => {
      return {
        distance: Math.abs(buttonClickFloor - x),
        shaftIndex: i,
      };
    });

    const sortedDistances = distances.sort((a, b) => a.distance - b.distance);

    const closestShaft = sortedDistances.find(shaft => checkIfElevatorIsValid(this.shafts[shaft.shaftIndex], buttonClickFloor))

    // TODO: What happens if no elevator is valid? :) 
    return closestShaft.shaftIndex;
  }
}
