import { motion } from "framer-motion";

type ElevatorShaftProps = {
  from: number;
  to: number;
  shaftIndex: number;
  elevatorIsDone: (shaft: number, floor: number) => void;
};

const NUMBER_OF_FLOORS = 20;
const TIME_PER_FLOOR = 2 // Seconds

// In percentage of parent element
const ELEVATOR_HEIGHT = 4;
const ELEVATOR_WIDTH = 80;
const DISTANCE_BETWEEN_FLOORS =
  (100 - NUMBER_OF_FLOORS * ELEVATOR_HEIGHT) / (NUMBER_OF_FLOORS + 1);

function calculateFloorPositionInPercentage(floor: number) {
  const floorsFromTop = NUMBER_OF_FLOORS - floor - 1;
  return (
    floorsFromTop * (ELEVATOR_HEIGHT + DISTANCE_BETWEEN_FLOORS) +
    DISTANCE_BETWEEN_FLOORS
  );
}

function calculateDuration(floorFrom: number, floorTo: number) {
 console.log(`Floor from ${floorFrom}`, `Floor to ${floorTo}`,Math.abs(floorFrom - floorTo) * TIME_PER_FLOOR )
  return Math.abs(floorFrom - floorTo) * TIME_PER_FLOOR;
}

export default function ElevatorShaft(props: ElevatorShaftProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-1/5 bg-cyan-400 items-center justify-evenly">
      {[...Array(NUMBER_OF_FLOORS)].map((_, i) => {
        return (
          // Using "style" instead of tailwind to enable dynamic css
          <li
            key={i}
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
        initial={{
          top: `${calculateFloorPositionInPercentage(props.from)}%`,
        }}
        animate={{
          top: `${calculateFloorPositionInPercentage(props.to)}%`,
        }}
        transition={{
          duration: calculateDuration(props.from, props.to),
        }}
        style={{
          height: `${ELEVATOR_HEIGHT}%`,
          width: `${ELEVATOR_WIDTH}%`,
          listStyle: "none",
          backgroundColor: "green",
          position: "absolute",
        }}
        onAnimationComplete={() => props.elevatorIsDone(props.shaftIndex, props.to)}
      />
    </div>
  );
}
