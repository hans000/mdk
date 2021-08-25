import { JText, Text } from '../../../src'

describe('jtext测试', () => {
    const jt = [
        Text.text('hello'),
        Text.black.text('world'),
    ]

    test('测试format', () => {
        expect(JText.format(jt)).toBe('["",{"text":"hello"},{"text":"world","color":"black"}]')
    })

    test('测试toJson', () => {
        expect(JText.toJson(jt)).toEqual({
            type: 'jtext',
            text: null,
            extra: jt,
        })
    })

})