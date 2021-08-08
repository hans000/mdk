import { Color } from '../../src'

describe('Color类', () => {
    test('测试Color', () => {
        expect(Color.int2hex(255<<16)).toEqual('#ff0000')
        expect(Color.rgb2hex(255, 0, 0)).toEqual('#ff0000')
    })
})