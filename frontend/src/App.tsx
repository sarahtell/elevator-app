import { useEffect, useState } from "react";
import ElevatorShaft from "./components/ElevatorShaft";
import axios from "axios";
import FloorButtons from "./components/FloorButtons";
import cloneDeep from "lodash/cloneDeep"

type ElevatorData = {
  locations: {floorFrom: number, floorTo: number}[];
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
  const [elevatorData, setElevatorData] = useState<ElevatorData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getElevatorData().then((res) => {
      setElevatorData(res.data);
      console.log("hej ")
    });
    setLoading(false)
  }, []);

  function elevatorIsDone(shaft: number, floorTo: number) {
    // TODO: update state when an elevator has reached its destination.
  } 

  function callElevatorToFloor(floor: number) {
    const nextState = cloneDeep(elevatorData)

    if(!nextState) {
      throw new Error('Locations can not be empty!')
    }

    // TODO: Make request to api and find out which elevator that should respond.

    nextState.locations[0].floorTo = floor
    setElevatorData(nextState)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-pink-200 to-teal-100">
      <FloorButtons callElevatorToFloor={callElevatorToFloor}/>
      {elevatorData?.locations?.map((floor, i) => {
        return <ElevatorShaft key={i} floorFrom={floor.floorFrom} floorTo={floor.floorTo}/>;
      })}
    </div>
  );
}

export default App;
