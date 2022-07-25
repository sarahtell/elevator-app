import { useEffect, useState } from "react";
import ElevatorShaft from "./components/ElevatorShaft";
import axios from "axios";
import FloorButtons from "./components/FloorButtons";
import cloneDeep from "lodash/cloneDeep";

type Shaft = {
  from: number;
  to: number;
  elevatorIsMoving: boolean;
};

type ElevatorState = {
  shafts: Shaft[];
};

const ELEVATOR_API_BASE_URL = "http://localhost:4000";

async function getElevatorData() {
  try {
    const response = await axios.get(`${ELEVATOR_API_BASE_URL}/elevators`);
    return response;
  } catch {
    throw new Error("Could not fetch elevator data!");
  }
}

function App() {
  const [elevatorState, setElevatorState] = useState<ElevatorState>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getElevatorData().then((res) => {
      setElevatorState(res.data);
    });
    setLoading(false);
  }, []);

  function elevatorIsDone(shaft: number, floor: number) {
    // TODO: update state when an elevator has reached its destination.
    const nextState = cloneDeep(elevatorState);

    if (!nextState) {
      throw new Error("State is undefined!");
    }

    nextState.shafts[shaft].from = floor;
    setElevatorState(nextState);
  }

  function callElevatorToFloor(floor: number) {
    const nextState = cloneDeep(elevatorState);

    if (!nextState) {
      throw new Error("State is undefined!");
    }

    // TODO: Make request to api and find out which elevator that should respond.

    nextState.shafts[0].to = floor;
    setElevatorState(nextState);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-pink-200 to-teal-100">
      <FloorButtons callElevatorToFloor={callElevatorToFloor} />
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
  );
}

export default App;
