import { motion } from "framer-motion";

type FloorButtonsProps = {
  buttonsClicked: boolean[];
  callElevatorToFloor: (floor: number) => void;
};

const NUMBER_OF_FLOORS = 20;

export default function FloorButtons(props: FloorButtonsProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-1/5 bg-cyan-400 items-center justify-evenly">
      {[...Array(NUMBER_OF_FLOORS)].map((_, i) => {
        return (
          <button
            onClick={() => props.callElevatorToFloor(NUMBER_OF_FLOORS - i - 1)}
            key={i}
            className={`h-6 w-6 rounded-full ${props.buttonsClicked[NUMBER_OF_FLOORS - i - 1] ? 'bg-green-500' : 'bg-pink-900'}`}
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
