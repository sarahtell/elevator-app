import ElevatorShaft from "./components/ElevatorShaft";

function App() {
  return (<div className="flex h-screen w-full bg-gradient-to-b from-pink-200 to-teal-100">
    <ElevatorShaft floorFrom={1} floorTo={5}/>
  </div>
  );
}

export default App;
