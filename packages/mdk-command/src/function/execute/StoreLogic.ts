import { Selector } from 'mdk-core';
import { BossbarOption, ValueType } from 'mdk-nbt';
import Execute from "./Execute";

export default class StoreLogic {
    readonly #context: Execute;

    constructor(context: Execute) {
        this.#context = context;
    }
   
    public score(scoreName: string, selector = '@s') {
        this.#context.add(`score ${selector} ${scoreName}`);
        return this.#context;
    }
    
    public block(path: string, axis = '~ ~ ~', value?: ValueType, rate?: number) {
        const textObj = this.#context
        textObj.add('block').add(`${axis} ${path}`);
        if (value) {
            textObj.add(value);
        }
        if (rate) {
            textObj.add(rate + '')
        }
        return this.#context;
    }
    
    public entity(path: string, selector = '@s', value?: ValueType, rate?: number) {
        const textObj = this.#context
        textObj.add('entity').add(selector).add(path)
        if (value) {
            textObj.add(value)
        }
        if (rate) {
            textObj.add(rate + '')
        }
        return this.#context;
    }
    
    public bossbar(id: string, option: BossbarOption = 'value') {
        const textObj = this.#context
        textObj.add('bossbar').add(id).add(option)
        return this.#context;
    }

    public storage(target: Selector, path: string, type: ValueType, scale = 1) {
        const textObj = this.#context
        textObj.add('storage', target.toString(), path, type, scale)
        return this.#context
    }
}