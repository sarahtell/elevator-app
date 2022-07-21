import express from 'express';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Elevator application is running on port ${port}.`);
});