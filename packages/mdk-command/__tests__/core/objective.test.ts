import { useFile } from '../../../mdk-core/src'
import { Objective } from '../../src'

process.env.__DEV__ = 'true'

describe('Objective 静态方法', () => {
    it('list remove display', () => {
        Objective.list()
        Objective.remove('foo')
        Objective.modify('foo', 'fooName')

        const file = useFile()

        expect(file.list[0].text).toEqual([
            'scoreboard objectives list',
            'scoreboard objectives remove foo',
            'scoreboard objectives modify foo displayname fooName',
        ])
    })
})