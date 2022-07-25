import { getRandomFloors } from '../src/utils';

describe('check elevator functions', () => {

    it('is a list with five elements', () => {
        const floors = 20
        const elevators = 5
        const randomFloors = getRandomFloors(elevators, floors)
        expect(randomFloors.length).toBe(5)
    })
})