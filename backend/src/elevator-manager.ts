import { getRandomFloors } from "./utils";

type Shaft = {
  from: number;
  to: number;
};

export default class ElevatorManager {
  public shafts: Shaft[] = [];

  constructor() {};

  initialize(numberOfShafts: number, numberOfFloors: number) {
    const randomFloors = getRandomFloors(numberOfShafts, numberOfFloors);
    this.shafts = randomFloors.map((floor) => {
      return { from: floor, to: floor, elevatorIsMoving: false };
    });
  };

  updateShaft(shafts: Shaft[]) {
      this.shafts = shafts
  };

  getClosestElevator(buttonClickFloor: number) {
    const elevatorFloors = this.shafts.map((s) => s.from);
    const diffArr = elevatorFloors.map((x) => Math.abs(buttonClickFloor - x));
    const minNumber = Math.min(...diffArr);
    return diffArr.findIndex((x) => x === minNumber);
  }
};
