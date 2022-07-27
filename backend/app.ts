import express from "express";
import cors from "cors";
import routes from './src/routes'

const app = express();
const port = process.env.PORT;

app.use(cors(), routes);

app.listen(port, () => {
  console.log(`Elevator application is running on port ${port}.`);
});
