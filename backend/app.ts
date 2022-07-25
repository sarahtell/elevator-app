import express from 'express';
import { getRandomFloors } from './src/utils';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(cors())

app.listen(port, () => {
    console.log(`Elevator application is running on port ${port}.`);
});

app.get('/elevators', (req, res) => {
    const randomFloors = getRandomFloors(5, 20)
    const elevatorLocations = randomFloors.map(floor => {

        return {floorFrom: floor, floorTo: floor}

    })
    res.send({locations: elevatorLocations})
  })