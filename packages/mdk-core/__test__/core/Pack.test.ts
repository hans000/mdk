import { Pack } from '../../src'

describe('Pack测试', () => {
    test('Pack基本测试', () => {
        const pack = new Pack({
            scope: false,
            packname: 'packname',
            description: 'pack description',
            version: '1.16',
        })
        pack.load()

        expect(pack.packname).toEqual('packname')
        expect(pack.scope).toEqual(false)
    })
})
