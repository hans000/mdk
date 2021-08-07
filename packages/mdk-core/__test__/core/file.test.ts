import mdk from '../../src'

describe('File测试', () => {
    test('File最简实例化测试', () => {
        const file = new mdk.File('foo')
        file.add('say 1')
        file.addComment('this is a comment')

        expect(file.filename).toEqual('foo')
        expect(file.tag).toEqual('')
        expect(file.list.map(v => v.text)).toEqual([
            'say 1',
            '# this is a comment',
        ])
        expect(file.fullname).toEqual('minecraft/functions/foo.mcfunction')
    })
})
