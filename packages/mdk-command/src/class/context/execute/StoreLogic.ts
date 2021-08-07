import { Execute } from "./Execute";
import { BossbarOption, ValueType } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export class StoreLogic {
    readonly #context: Execute;

    constructor(context: Execute) {
        this.#context = context;
    }
 
    public score(scoreName: string, selector = 'mdk-core') { // TODO Selector
        this.#context.getTextObject().add(`score ${selector} ${scoreName}`);
        return this.#context;
    }
 
    public block(path: string, axis = '~ ~ ~', value?: ValueType, scale?: number) {
        const textObj = this.#context.getTextObject()
        textObj.add('block').add(`${axis} ${path}`);
        if (value) {
            textObj.add(value);
        }
        if (scale) {
            textObj.add(scale + '')
        }
        return this.#context;
    }
 
    public entity(path: string, target = 'mdk-core', value?: ValueType, scale?: number) {
        const textObj = this.#context.getTextObject()
        textObj.add('entity').add(target).add(path)
        if (value) {
            textObj.add(value)
        }
        if (scale) {
            textObj.add(scale + '')
        }
        return this.#context;
    }
  
    public bossbar(id: string, option: BossbarOption = 'value') {
        const textObj = this.#context.getTextObject()
        textObj.add('bossbar').add(id).add(option)
        return this.#context;
    }

    public storage(target: Selector, path: string, type: ValueType, scale = 1) {
        const textObj = this.#context.getTextObject()
        textObj.add('storage', target.toString(), path, type, scale)
        return this.#context
    }
}