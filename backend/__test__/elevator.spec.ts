import ElevatorManager from "../src/elevator-manager";
import { checkIfElevatorIsValid, getRandomFloors } from "../src/utils";

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
    const buttonClickFloor = 2
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
    const closestShaft = elevatorManager.getClosestValidElevator(buttonClickFloor);
    expect(closestShaft).toBe(1);
  });

  it("returns false if elevator in shaft is moving", () => {
    const shaft = {
        from: 6,
        to: 8,
      }
    expect(checkIfElevatorIsValid(shaft)).toEqual(false);
  });

  it("returns true if elevator in shaft is standing still", () => {
    const shaft = {
        from: 9,
        to: 9,
      }
    expect(checkIfElevatorIsValid(shaft)).toEqual(true);
  });

  it("returns the valid elevator", () => {
    const buttonClickFloor = 7
    elevatorManager.shafts = [
      {// Moving away from button click floor
        from: 8,
        to: 10,
      },
      {// Standing still
        from: 3,
        to: 3,
      },
      {// Moving towards button click floor
        from: 4,
        to: 5,
      },
      {// Moving away from button click floor
        from: 7,
        to: 6,
      }
    ];
    const closestValidElevator = elevatorManager.getClosestValidElevator(buttonClickFloor);
    expect(closestValidElevator).toBe(1);
  });
  
});
