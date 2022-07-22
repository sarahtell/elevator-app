export function getRandomFloors(elevators: number, floors: number): number[] {

    return [...Array(elevators)].map(_=>Math.round(Math.random()*floors))
} 
