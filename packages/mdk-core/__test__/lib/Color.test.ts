import mdk from '../../src'

describe('Color类', () => {
    test('测试Color', () => {
        expect(mdk.Color.int2hex(255<<16)).toEqual('#ff0000')

        expect(mdk.Color.rgb2hex(255, 0, 0)).toEqual('#ff0000')
    })
})