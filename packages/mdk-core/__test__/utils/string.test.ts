import { revise } from "../../src/utils";

describe('string 方法', () => {
    test('clear方法', () => {
        expect(revise('say 1')).toEqual('say 1')
        expect(revise('say 1 ')).toEqual('say 1')
        expect(revise('say 1 undefined')).toEqual('say 1')
        expect(revise('say 1 undefined undefined')).toEqual('say 1')
        expect(revise('say 1 undefined undefined ')).toEqual('say 1')
    })
})