import mdk from '../../../src'

describe('jtext测试', () => {
    // test('测试实例化', () => {
    //     const jtext = mdk.jtext()
    //     expect(jtext.toString()).toEqual('[""]')
    // })

    test('测试add方法，组件', () => {
        const jtext = mdk.jtext()
        jtext.add(mdk.Text.text('hello'))
        jtext.add(mdk.Text.black.text('world'))
        expect(jtext.toString()).toEqual('["",{"text":"hello"},{"text":"world","color":"black"}]')
    })
})