export function getRandomElevatorFloors(elevators: number, floors: number): number[] {

    return [...Array(elevators)].map(_=>Math.round(Math.random()*floors))
} 
