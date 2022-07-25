import { useEffect, useState } from "react";
import ElevatorShaft from "./components/ElevatorShaft";
import axios from "axios";

type ElevatorData = {
  initialLocations: number[];
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

  useEffect(() => {
    getElevatorData().then((res) => {
      setElevatorData(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-pink-200 to-teal-100">
      {elevatorData?.initialLocations?.map((floor, i) => {
        return <ElevatorShaft key={i} floorFrom={floor} floorTo={floor} />;
      })}
    </div>
  );
}

export default App;
