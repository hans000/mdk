import { jtext, Text } from '../../../src'

describe('jtext测试', () => {
    // test('测试实例化', () => {
    //     const jtext = mdk.jtext()
    //     expect(jtext.toString()).toEqual('[""]')
    // })

    test('测试add方法，组件', () => {
        const jt = jtext()
        jt.add(Text.text('hello'))
        jt.add(Text.black.text('world'))
        expect(jt.toString()).toEqual('["",{"text":"hello"},{"text":"world","color":"black"}]')
    })
})