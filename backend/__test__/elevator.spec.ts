import {getRandomElevatorFloors} from '../src/utils'

describe('check elevator functions', () => {

    it('is a list with five elements', () => {
        const floors = 20
        const elevators = 5
        const randomFloors = getRandomElevatorFloors(elevators, floors)
        console.log(randomFloors)
        expect(randomFloors.length).toBe(5)
    })
})