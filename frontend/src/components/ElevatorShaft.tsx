type ElevatorShaftProps = {
  floorFrom: number;
  floorTo: number;
};

const NUMBER_OF_FLOORS = 20;

// In percentage of parent element
const ELEVATOR_HEIGHT = 4;
const ELEVATOR_WIDTH = 80;

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
    </div>
  );
}
