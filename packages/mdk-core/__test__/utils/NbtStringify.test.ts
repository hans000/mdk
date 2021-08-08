import { GsonStringify } from '../../src'

describe('GsonStringify', () => {
    it('Gsonstringify 测试', () => {
        expect(GsonStringify({})).toBe('{}')
        expect(GsonStringify({ name: 'stone' })).toBe('{name:"stone"}')
        expect(GsonStringify({
            display: {
                name: 'stone'
            }
        })).toBe('{display:{name:"stone"}}')
    })
})