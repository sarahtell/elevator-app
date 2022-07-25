import express from "express";
import { getRandomFloors } from "./src/utils";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.listen(port, () => {
  console.log(`Elevator application is running on port ${port}.`);
});

app.get("/elevators", (req, res) => {
  const randomFloors = getRandomFloors(5, 20);
  const shafts = randomFloors.map((floor) => {
    return { from: floor, to: floor, elevatorIsMoving: false };
  });
  res.send({ shafts: shafts, buttonsClicked: new Array(20).fill(false) });
});
