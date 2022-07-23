import { motion } from "framer-motion";

type ElevatorShaftProps = {
  floorFrom: number;
  floorTo: number;
};

const NUMBER_OF_FLOORS = 20;

// In percentage of parent element
const ELEVATOR_HEIGHT = 4;
const ELEVATOR_WIDTH = 80;
const DISTANCE_BETWEEN_FLOORS =
  (100 - NUMBER_OF_FLOORS * ELEVATOR_HEIGHT) / (NUMBER_OF_FLOORS + 1);

function calculateFloorPositionInPercentage(floor: number) {
  const floorsFromTop = NUMBER_OF_FLOORS - floor;
  return (
    floorsFromTop * (ELEVATOR_HEIGHT + DISTANCE_BETWEEN_FLOORS) +
    DISTANCE_BETWEEN_FLOORS
  );
}

export default function ElevatorShaft(props: ElevatorShaftProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-1/5 bg-cyan-400 items-center justify-evenly">
      {[...Array(NUMBER_OF_FLOORS)].map((floor) => {
        return (
          // Using "style" instead of tailwind to enable dynamic css
          <li
            key={floor}
            style={{
              height: `${ELEVATOR_HEIGHT}%`,
              width: `${ELEVATOR_WIDTH}%`,
              listStyle: "none",
              backgroundColor: "red",
            }}
          />
        );
      })}
      <motion.li
        initial={{ top: `${calculateFloorPositionInPercentage(props.floorFrom)}%`}}
        animate={{top: `${calculateFloorPositionInPercentage(props.floorTo)}%`}}
        style={{
          height: `${ELEVATOR_HEIGHT}%`,
          width: `${ELEVATOR_WIDTH}%`,
          listStyle: "none",
          backgroundColor: "green",
          position: "absolute",
        }}
      />
    </div>
  );
}
