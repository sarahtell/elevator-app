import express from 'express';
import { getRandomFloors } from './src/utils';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Elevator application is running on port ${port}.`);
});

app.get('/elevators', (req, res) => {
    const randomFloors = getRandomFloors(5, 20)
    res.send({initialLocations: randomFloors})
  })