import express from "express";
import cors from "cors";
import ElevatorManager from "./src/elevator-manager";

const app = express();
const port = process.env.PORT;
const elevatorManager = new ElevatorManager();

app.use(cors());

app.listen(port, () => {
  console.log(`Elevator application is running on port ${port}.`);
});

app.post("/elevators", express.json(), (req, res) => {
  const {numberOfFloors, numberOfShafts} = req.body.data;
  elevatorManager.initialize(numberOfShafts, numberOfFloors);
  res.json({ shafts: elevatorManager.shafts });
});

app.post("/callElevator", express.json(), (req, res) => {
  const buttonClickFloor = req.body.data.buttonClickFloor;
  elevatorManager.updateShaft(req.body.data.shafts);
  res.json(elevatorManager.getClosestValidElevator(buttonClickFloor));
});

app.post("/updateElevator", express.json(), (req, res) => {
    const buttonClickFloor = req.body.data.buttonClickFloor;
    elevatorManager.updateShaft(req.body.data.shafts);
    res.json(elevatorManager.getClosestValidElevator(buttonClickFloor));
  });
