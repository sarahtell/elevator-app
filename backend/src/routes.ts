import express from "express";
import ElevatorManager from "./elevator-manager";

const elevatorManager = new ElevatorManager();
const router = express.Router();

router.post("/elevators", express.json(), (req, res) => {
  const { numberOfFloors, numberOfShafts } = req.body.data;
  elevatorManager.initialize(numberOfShafts, numberOfFloors);
  res.json({ shafts: elevatorManager.shafts });
});

router.post("/callElevator", express.json(), (req, res) => {
  const buttonClickFloor = req.body.data.buttonClickFloor;
  elevatorManager.updateShaft(req.body.data.shafts);
  res.json(elevatorManager.getClosestValidElevator(buttonClickFloor));
});

export default router;
