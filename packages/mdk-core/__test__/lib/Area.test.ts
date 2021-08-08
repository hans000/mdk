import { Area, Location, area, location } from '../../src'

describe('Area', () => {
    test('Area类', () => {
        const area = Area.fromLocations({ x: 0, y: 0, z: 0 }, { x: 10, y: 10, z: 10 })
        expect(area.toString()).toEqual('0 0 0 10 10 10')
        expect(area.toString('^')).toEqual('^ ^ ^ ^10 ^10 ^10')
        expect(area.toString('~')).toEqual('~ ~ ~ ~10 ~10 ~10')
        expect(area.toJson()).toEqual({ from: '0 0 0', to: '10 10 10'})
        expect(area.toJson('^')).toEqual({ from: '^ ^ ^', to: '^10 ^10 ^10'})
        expect(area.toJson('~')).toEqual({ from: '~ ~ ~', to: '~10 ~10 ~10'})
        expect(area.toRangeNbtString()).toEqual('dx=10,dy=10,dz=10')
        expect(area.getFromLocation().toString()).toEqual('0 0 0')
        expect(area.getToLocation().toString()).toEqual('10 10 10')
        expect(area.getRange()).toEqual([10, 10, 10])

        const area2 = Area.fromRange(new Location(), 10)
        expect(area2.toString()).toEqual('0 0 0 10 10 10')
        expect(Area.toRangeNbtString(...area2.getRange())).toEqual('dx=10,dy=10,dz=10')
    })
    test('area方法', () => {
        expect(area(location(), location()).toString()).toEqual('0 0 0 0 0 0')
    })
})
