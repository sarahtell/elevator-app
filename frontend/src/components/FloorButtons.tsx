import { ELEVATOR_HEIGHT, NUMBER_OF_FLOORS, Shaft } from "../App";


type FloorButtonsProps = {
  buttonsClicked: boolean[];
  shafts: Shaft[];
  callElevatorToFloor: (floor: number) => void;
};

function hasElevatorOnTheSameFloor(shafts: Shaft[], floor: number): boolean {
  return shafts
    .map((s) => {
      if (s.from === s.to && s.from === floor) {
        return true;
      }
    })
    .includes(true);
}

export default function FloorButtons(props: FloorButtonsProps): JSX.Element {
  return (
    <div className="relative flex flex-col bg-transparent items-center justify-evenly">
      {[...Array(NUMBER_OF_FLOORS)].map((_, i) => {
        return (
          <button
            onClick={() => {
              !hasElevatorOnTheSameFloor(
                props.shafts,
                NUMBER_OF_FLOORS - i - 1
              ) && props.callElevatorToFloor(NUMBER_OF_FLOORS - i - 1);
            }}
            key={i}
            disabled={props.buttonsClicked[NUMBER_OF_FLOORS - i - 1]}
            style={{height: `${ELEVATOR_HEIGHT*0.5}%`}}
            className={`rounded-full active:bg-slate-500 active:border-green-500 active:border-4 aspect-square ${
              props.buttonsClicked[NUMBER_OF_FLOORS - i - 1]
                ? "bg-slate-500 border-green-500 border-4"
                : "bg-slate-900"
            }`}
          >
            <p className="text-white">{NUMBER_OF_FLOORS - i - 1}</p>
          </button>
        );
      })}
    </div>
  );
}
