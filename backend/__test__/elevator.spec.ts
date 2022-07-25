import ElevatorManager from "../src/elevator-manager";
import { getRandomFloors } from "../src/utils";

describe("check elevator functions", () => {
  const elevatorManager = new ElevatorManager();

  it("is a list with five elements", () => {
    const floors = 20;
    const shafts = 5;
    const randomFloors = getRandomFloors(shafts, floors);
    expect(randomFloors.length).toBe(5);
  });

  it("initializes the class", () => {
    const floors = 20;
    const shafts = 5;
    elevatorManager.initialize(shafts, floors);
    expect(elevatorManager.shafts.length).toBe(5);
  });

  it("sends the elevator from closest shaft on button click", () => {
    elevatorManager.shafts = [
      {
        from: 10,
        to: 10,
      },
      {
        from: 3,
        to: 3,
      },
      {
        from: 20,
        to: 20,
      },
    ];
    const closestShaft = elevatorManager.getClosestElevator(2);
    expect(closestShaft).toBe(1);
  });
});
