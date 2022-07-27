import cloneDeep from "lodash/cloneDeep";
import { useEffect, useState } from "react";
import Cloud from "./components/Cloud";
import ElevatorShaft from "./components/ElevatorShaft";
import FloorButtons from "./components/FloorButtons";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import ElevatorApi from "./elevator-api";

export const NUMBER_OF_SHAFTS = 5;
export const NUMBER_OF_FLOORS = 20;
export const TIME_PER_FLOOR = 2; // Seconds

// In percentage of parent element
export const ELEVATOR_HEIGHT = 100 / NUMBER_OF_FLOORS;
export const ELEVATOR_WIDTH = 60;

export type Shaft = {
  from: number;
  to: number;
};

type ElevatorState = {
  shafts: Shaft[];
  buttonsClicked: boolean[];
};

function App() {
  const elevatorApi = new ElevatorApi();
  const [elevatorState, setElevatorState] = useState<ElevatorState>({
    shafts: [],
    buttonsClicked: new Array(NUMBER_OF_FLOORS).fill(false),
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    elevatorApi
      .getInitialElevatorData(NUMBER_OF_FLOORS, NUMBER_OF_SHAFTS)
      .then((res) => {
        setElevatorState({ ...elevatorState, shafts: res.data.shafts });
      });
    setLoading(false);
  }, []);

  function elevatorIsDone(shaft: number, floor: number) {
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
    try {
      const response = await elevatorApi.requestElevator(
        buttonClickFloor,
        nextState.shafts
      );

      nextState.buttonsClicked[buttonClickFloor] = true;
      const closestShaft = response.data;
      nextState.shafts[closestShaft].to = buttonClickFloor;

      setElevatorState(nextState);
    } catch (e: any) {
      setHasError(true);
      setErrorMessage(e.message);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Layout>
        <>
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
        </>
      </Layout>
      {hasError && (
        <Modal errorMessage={errorMessage} setHasError={setHasError} />
      )}
    </>
  );
}

export default App;
