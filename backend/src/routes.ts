import express from "express";
import ElevatorManager from "./elevator-manager";

const elevatorManager = new ElevatorManager();
const router = express.Router();

router.post("/elevators", express.json(), (req, res) => {
  try {
    const { numberOfFloors, numberOfShafts } = req.body.data;
    elevatorManager.initialize(numberOfShafts, numberOfFloors);
    res.json({ shafts: elevatorManager.shafts });
  } catch {
    res.status(500).json({
      code: 500,
      message: "Could not fetch elevator!",
    });
  }
});

router.post("/callElevator", express.json(), (req, res) => {
  try {
    const buttonClickFloor = req.body.data.buttonClickFloor;
    elevatorManager.updateShaft(req.body.data.shafts);
    res.json(elevatorManager.getClosestValidElevator(buttonClickFloor));
  } catch {
    res.status(429).json({
      code: 429,
      message: "All elevators are occupied, please take the stairs or wait!",
    });
  }
});

export default router;
