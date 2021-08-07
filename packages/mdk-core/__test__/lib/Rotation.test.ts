import { rotation, Rotation } from '../../src/lib'

describe('Rotation', () => {
    test('Rotation类', () => {
        expect(new Rotation(1, 2).toString()).toEqual('1 2')
        expect(new Rotation('1 2').toString()).toEqual('1 2')
        expect(new Rotation('~1 ~2').toString()).toEqual('1 2')

        const rotation = new Rotation(1, 2)
        expect(rotation.toString()).toEqual('1 2')
        expect(rotation.toString('~')).toEqual('~1 ~2')
        expect(rotation.toAbsolute()).toEqual('1 2')
        expect(rotation.toRelative()).toEqual('~1 ~2')
        expect(rotation.toNbtString()).toEqual('rotation_x=1,rotation_y=2')

        const rot1 = rotation.translate(new Rotation(10, 10))
        expect(rotation.toString()).toEqual('1 2') 
        expect(rot1.toString()).toEqual('11 12') 
        
        const rot2 = rotation.multiply([10, 10])
        expect(rotation.toString()).toEqual('1 2')   
        expect(rot2.toString()).toEqual('10 20')   

        expect(new Rotation().toString()).toEqual('0 0')
        expect(new Rotation().toString('~')).toEqual('~ ~')
        expect(new Rotation().toNbtString()).toEqual('rotation_x=0,rotation_y=0')
    })
    test('rotation方法', () => {
        expect(rotation().toString()).toEqual('0 0')
        expect(rotation('1 1').toString()).toEqual('1 1')
        expect(rotation(1, 1).toString()).toEqual('1 1')
    })
})
