import {
  ELEVATOR_HEIGHT,
  NUMBER_OF_FLOORS,
  NUMBER_OF_SHAFTS,
  Shaft,
} from "../App";

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

function hasNoAvailableElevator(buttonsClicked: boolean[]): boolean {
  const numberOfButtonsClicked = buttonsClicked.filter(Boolean).length;
  return numberOfButtonsClicked === NUMBER_OF_SHAFTS;
}

function buttonIsClicked(
  buttonClicked: number,
  buttonsClicked: boolean[]
): boolean {
  return buttonsClicked[buttonClicked];
}

function getButtonStyle(
  buttonIsClicked: boolean,
  hasNoAvailableElevator: boolean
): string {
  if (buttonIsClicked) {
    return "bg-slate-500 border-green-500 border-4";
  } else if (hasNoAvailableElevator) {
    return "bg-slate-500 border-red-500 border-4";
  } else {
    return "bg-slate-900";
  }
}

export default function FloorButtons(props: FloorButtonsProps): JSX.Element {
  return (
    <div className="relative flex flex-col bg-transparent items-center justify-evenly">
      {[...Array(NUMBER_OF_FLOORS)].map((_, i) => {
        const buttonClicked = NUMBER_OF_FLOORS - i - 1;
        return (
          <button
            onClick={() => {
              !hasElevatorOnTheSameFloor(props.shafts, buttonClicked) &&
                props.callElevatorToFloor(buttonClicked);
            }}
            key={i}
            disabled={
              buttonIsClicked(buttonClicked, props.buttonsClicked)
            }
            style={{ height: `${ELEVATOR_HEIGHT * 0.5}%` }}
            className={`rounded-full active:bg-slate-500 active:border-green-500 active:border-4 aspect-square ${getButtonStyle(
              buttonIsClicked(buttonClicked, props.buttonsClicked),
              hasNoAvailableElevator(props.buttonsClicked)
            )}`}
          >
            <p className="text-white">{buttonClicked}</p>
          </button>
        );
      })}
    </div>
  );
}
