import { motion } from "framer-motion";


type FloorButtonsProps = {
  callElevatorToFloor: (floor: number) => void;
};

const NUMBER_OF_FLOORS = 20;

// In percentage of parent element
const ELEVATOR_HEIGHT = 4;
const ELEVATOR_WIDTH = 80;
const DISTANCE_BETWEEN_FLOORS =
  (100 - NUMBER_OF_FLOORS * ELEVATOR_HEIGHT) / (NUMBER_OF_FLOORS + 1);

function calculateFloorPositionInPercentage(floor: number) {
  const floorsFromTop = (NUMBER_OF_FLOORS - floor - 1);
  return (
    floorsFromTop * (ELEVATOR_HEIGHT + DISTANCE_BETWEEN_FLOORS) +
    DISTANCE_BETWEEN_FLOORS
  );
}

export default function FloorButtons(props: FloorButtonsProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-1/5 bg-cyan-400 items-center justify-evenly">
      {[...Array(NUMBER_OF_FLOORS)].map((_, i) => {
        return (
          <button
            onClick={() => props.callElevatorToFloor(NUMBER_OF_FLOORS - i - 1)}
            key={i}
            className="h-6 w-6 bg-pink-900 rounded-full focus:bg-green-500"
          >
            <p className="text-white">
            {NUMBER_OF_FLOORS - i - 1}
            </p>
          </button>
        );  
      })}
    </div>
  );
}
