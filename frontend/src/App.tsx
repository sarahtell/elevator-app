import { useEffect, useState } from "react";
import ElevatorShaft from "./components/ElevatorShaft";
import axios, { AxiosResponse } from "axios";
import FloorButtons from "./components/FloorButtons";
import cloneDeep from "lodash/cloneDeep";

export type Shaft = {
  from: number;
  to: number;
};

type ElevatorState = {
  shafts: Shaft[];
  buttonsClicked: boolean[];
};

const ELEVATOR_API_BASE_URL = "http://localhost:4000";

async function getInitialElevatorData() {
  try {
    return await axios.get(`${ELEVATOR_API_BASE_URL}/elevators`);
  } catch {
    throw new Error("Could not fetch elevator data!");
  }
}

async function requestElevator(
  buttonClickFloor: number,
  shafts: Shaft[]
): Promise<AxiosResponse<number, any>> {
  try {
    return await axios.post(`${ELEVATOR_API_BASE_URL}/callElevator`, {
      data: { buttonClickFloor, shafts },
    });
  } catch {
    throw new Error("Could not request elevator!");
  }
}

function App() {
  const [elevatorState, setElevatorState] = useState<ElevatorState>({
    shafts: [],
    buttonsClicked: new Array(20).fill(false),
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getInitialElevatorData().then((res) => {
      setElevatorState({ ...elevatorState, shafts: res.data.shafts });
    });
    setLoading(false);
  }, []);

  function elevatorIsDone(shaft: number, floor: number) {
    // TODO: update state when an elevator has reached its destination.
    const nextState = cloneDeep(elevatorState);

    if (!nextState) {
      throw new Error("State is undefined!");
    }

    nextState.buttonsClicked[floor] = false;

    nextState.shafts[shaft].from = floor;
    setElevatorState(nextState);
  }

  async function callElevatorToFloor(buttonClickFloor: number) {
    const nextState = cloneDeep(elevatorState);

    if (!nextState) {
      throw new Error("State is undefined!");
    }

    // TODO: Make request to api and find out which elevator that should respond.
    const response = await requestElevator(buttonClickFloor, nextState.shafts);

    const closestShaft = response.data;

    nextState.buttonsClicked[buttonClickFloor] = true;

    nextState.shafts[closestShaft].to = buttonClickFloor;
    setElevatorState(nextState);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-sky-600 to-sky-800 justify-center">
      <div className="flex w-4/6 px-20 bg-sky-400">
        <FloorButtons
          callElevatorToFloor={callElevatorToFloor}
          buttonsClicked={elevatorState?.buttonsClicked || []}
          shafts={elevatorState.shafts}
        />
        {elevatorState?.shafts.map((shaft, i) => {
          return (
            <ElevatorShaft
              key={i}
              shaftIndex={i}  
              from={shaft.from}
              to={shaft.to}
              elevatorIsDone={elevatorIsDone}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
