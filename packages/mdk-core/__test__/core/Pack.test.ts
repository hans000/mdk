import mdk from '../../src'

describe('Pack测试', () => {
    test('Pack基本测试', () => {
        const pack = new mdk.Pack({
            scope: false,
            packname: 'packname',
            description: 'pack description',
            version: '1.16'
        })
        expect(pack.packname).toEqual('packname')
        expect(pack.scope).toEqual(false)
    })
})
