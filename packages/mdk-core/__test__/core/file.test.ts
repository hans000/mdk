import { File } from '../../src'

describe('File测试', () => {
    process.env.__DEV__ = "true"
    test('File最简实例化测试', () => {
        const file = new File({
            filename: 'foo',
            render(ctx) {
                ctx.add('say 1')
                ctx.addComment('this is a comment')
            }
        })

        file.load()

        expect(file.filename).toEqual('foo')
        expect(file.tag).toEqual('')
        expect(file.list.map(v => v.text)).toEqual([
            'say 1',
            '# this is a comment',
        ])
        expect(file.fullname).toEqual('minecraft/functions/foo.mcfunction')
    })
})
