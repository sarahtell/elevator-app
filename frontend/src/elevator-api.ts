import axios, { AxiosResponse } from "axios";
import { Shaft } from "./App";

const ELEVATOR_API_BASE_URL = `http://localhost:${process.env.REACT_APP_API_PORT}`;

export default class ElevatorApi {
  async getInitialElevatorData(numberOfFloors: number, numberOfShafts: number) {
    try {
      return await axios.post(`${ELEVATOR_API_BASE_URL}/elevators`, {
        data: { numberOfFloors, numberOfShafts },
      });
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async requestElevator(
    buttonClickFloor: number,
    shafts: Shaft[]
  ): Promise<AxiosResponse<number, any>> {
    try {
      return await axios.post(`${ELEVATOR_API_BASE_URL}/callElevator`, {
        data: { buttonClickFloor, shafts },
      });
    } catch (e: any) {
      throw new Error(e.response.data.message);
    }
  }
}
