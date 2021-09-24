import { Execute } from "./Execute";
import { BossbarOption, ValueType } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export type StoreFn = (context: StoreLogic) => Execute

export class StoreLogic {
    readonly #context: Execute

    constructor(context: Execute) {
        this.#context = context
    }

    public score(scoreName: string, selector: string | Selector = '@s') {
        this.#context.getTextObject().add(`score ${selector} ${scoreName}`);
        return this.#context
    }
 
    public block(path: string, coordicate = '~ ~ ~', value?: ValueType, scale?: number) {
        const textObj = this.#context.getTextObject()
        textObj.add('block').add(`${coordicate} ${path}`)
        if (value) {
            textObj.add(value);
        }
        if (scale) {
            textObj.add(scale + '')
        }
        return this.#context
    }
 
    public entity(path: string, target: string | Selector = '@s', value?: ValueType, scale?: number) {
        const textObj = this.#context.getTextObject()
        textObj.add('entity').add(target.toString()).add(path)
        if (value) {
            textObj.add(value)
        }
        if (scale) {
            textObj.add(scale + '')
        }
        return this.#context
    }
  
    public bossbar(id: string, option: BossbarOption = 'value') {
        const textObj = this.#context.getTextObject()
        textObj.add('bossbar').add(id).add(option)
        return this.#context;
    }

    public storage(target: string | Selector, path: string, type: ValueType, scale = 1) {
        const textObj = this.#context.getTextObject()
        textObj.add('storage', target.toString(), path, type, scale)
        return this.#context
    }
}