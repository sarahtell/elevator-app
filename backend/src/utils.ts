export function getRandomFloors(numberOfShafts: number, numberOfFloors: number): number[] {
    return [...Array(numberOfShafts)].map(_=>Math.round(Math.random()*(numberOfFloors - 1)))
}
