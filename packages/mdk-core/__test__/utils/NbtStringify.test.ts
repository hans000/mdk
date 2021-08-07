import mdk from '../../src'

describe('GsonStringify', () => {
    it('Gsonstringify 测试', () => {
        expect(mdk.utils.GsonStringify({})).toBe('{}')
        expect(mdk.utils.GsonStringify({ name: 'stone' })).toBe('{name:"stone"}')
        expect(mdk.utils.GsonStringify({
            display: {
                name: 'stone'
            }
        })).toBe('{display:{name:"stone"}}')
    })
})