import mdk from '../../src'

describe('createFile测试', () => {
    test('createFile测试', () => {
        const file = mdk.createFile({
            filename: 'foo',
            render(context) {
                context.add('say 1')
                context.addComment('this is a comment')
            }
        })
        

        expect(file.filename).toEqual('foo')
        expect(file.tag).toEqual('')
        expect(file.list.map(v => v.text)).toEqual([
            'say 1',
            '# this is a comment',
        ])
        expect(file.fullname).toEqual('minecraft/functions/foo.mcfunction')
    })
})
