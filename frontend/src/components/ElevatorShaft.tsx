import { motion } from "framer-motion";
import { ELEVATOR_HEIGHT, ELEVATOR_WIDTH, NUMBER_OF_FLOORS, TIME_PER_FLOOR } from "../App";

type ElevatorShaftProps = {
  from: number;
  to: number;
  shaftIndex: number;
  elevatorIsDone: (shaft: number, floor: number) => void;
};

function calculateFloorPositionInPercentage(floor: number) {
  const floorsFromTop = NUMBER_OF_FLOORS - floor - 1;
  return (
    floorsFromTop * ELEVATOR_HEIGHT
  );
}

function calculateDuration(floorFrom: number, floorTo: number) {
  return Math.abs(floorFrom - floorTo) * TIME_PER_FLOOR;
}

export default function ElevatorShaft(props: ElevatorShaftProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-1/5 bg-transparent items-center justify-evenly">
      {[...Array(NUMBER_OF_FLOORS)].map((_, i) => {
        return (
          // Using "style" instead of tailwind to enable dynamic css
          <div
            key={i}
            style={{
              height: `${ELEVATOR_HEIGHT}%`,
              width: `${ELEVATOR_WIDTH}%`,
              listStyle: "none",
              backgroundColor: "#034f84",
            }}
          >
            <div className="w-1/2 h-full border-r-2 border-dashed" />
          </div>
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
          ease: "linear",
        }}
        style={{
          height: `${ELEVATOR_HEIGHT}%`,
          width: `${ELEVATOR_WIDTH}%`,
          listStyle: "none",
          border: "solid 4px white",
          backgroundColor: "#0576c6",
          position: "absolute",
        }}
        onAnimationComplete={() =>
          props.elevatorIsDone(props.shaftIndex, props.to)
        }
      />
    </div>
  );
}
