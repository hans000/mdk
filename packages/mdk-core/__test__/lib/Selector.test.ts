import mdk from '../../src'

describe('Selector', () => {
    process.env.__DEV__ = "true"
    test('测试基础项', () => {
        expect(new mdk.Selector().toString()).toEqual('@s')
        expect(new mdk.Selector('foo').toString()).toEqual('foo')
        expect(new mdk.Selector({ target: '@a' }).toString()).toEqual('@a')
        expect(new mdk.Selector({
            target: '@a',
            scores: {
                foo: [, 1],
                bar: [1, 10]
            }
        }).toString()).toEqual('@a[scores={foo=..1,bar=1..10}]')
    })
    test('测试命令', () => {
        const file = mdk.createFile({
            filename: 'foo',
            render() {
                const sel = new mdk.Selector({
                    gamemode: ['adventure'],
                })
                sel.commands.tp('~ ~ ~')
                sel.commands.execute.as().at().anchored('eyes').run('say 1')
                sel.commands.scoreboard('timer')
                sel.commands.fill(mdk.location().toRelative(), new mdk.Location().toRelative(), 'stone')
                // sel.select('timer').commands.execute.ifScore('@e', 'timer', '+=').run(sel.commands.tp('~ ~ ~').pop())
                
                const nameSel = new mdk.Selector('foo')
                nameSel.commands.kill()
            }
        })
        expect(file.list.map(v => v.text)).toEqual([
            "tp @s[gamemode=adventure] ~ ~ ~",
            "execute as @s[gamemode=adventure] at @s anchored eyes run say 1",
            "scoreboard objectives add timer dummy",
            "fill ~ ~ ~ ~ ~ ~ stone",
            // "execute if score @s[gamemode=adventure] timer += @e timer run tp @s[gamemode=adventure] ~ ~ ~",
            "kill foo",
        ])
    })
})