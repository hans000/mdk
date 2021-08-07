import { Location, location } from '../../src/lib'

describe('Location', () => {
    test('Location测试', () => {
        const origin = new Location()
        expect(origin.toLocal()).toEqual('^ ^ ^')
        expect(origin.toRelative()).toEqual('~ ~ ~')
        expect(origin.toAbsolute()).toEqual('0 0 0')
        expect(origin.toString('^')).toEqual('^ ^ ^')
        expect(origin.toString('~')).toEqual('~ ~ ~')
        expect(origin.toString()).toEqual('0 0 0')
        expect(origin.toNbtString()).toEqual('x=0,y=0,z=0')
        expect(origin.toArray()).toEqual([0, 0, 0])
        expect(origin.toJson()).toEqual({ x: 0, y: 0, z: 0 })

        expect(new Location(1, 2, 3).toString()).toEqual('1 2 3')
        expect(new Location('1 2 3').toString()).toEqual('1 2 3')
        expect(new Location('~1 ~2 ~3').toString()).toEqual('1 2 3')
        expect(new Location('^1 ^2 ^3').toString()).toEqual('1 2 3')

        const location = new Location(1, 2, 3)
        const newLocation = location.translate(new Location(10, 10, 10))
        expect(location.toString()).toEqual('1 2 3')
        expect(newLocation.toString()).toEqual('11 12 13')
        expect(location.getRange(newLocation)).toEqual([10, 10, 10])
        
        const newLocation2 = location.multiply(10)
        expect(location.toString()).toEqual('1 2 3')
        expect(newLocation2.toString()).toEqual('10 20 30')

        const newLocation3 = location.multiply([0.1, 1, 100])
        expect(location.toString()).toEqual('1 2 3')
        expect(newLocation3.toString()).toEqual('0.1 2 300')
        expect(location.getRange(newLocation3)).toEqual([-0.9, 0, 297])
    })
    test('location测试', () => {
        expect(location().toString()).toBe('0 0 0')
        expect(location().toString('~')).toBe('~ ~ ~')
        expect(location().toString('^')).toBe('^ ^ ^')
    })
})
