import { Execute } from ".";
import { Selector } from 'mdk-core';
import { BossbarOption, ValueType } from 'mdk-nbt';

export class StoreLogic {
    readonly #context: Execute;
    readonly #target: Selector;

    constructor(context: Execute, target: Selector) {
        this.#context = context;
        this.#target = target;
    }
 
    public score(scoreName: string) {
        this.#context.getTextObject().add(`score ${this.#target} ${scoreName}`);
        return this.#context;
    }
   
    public block(path: string, axis = '~ ~ ~', value?: ValueType, scale?: number) {
        const textObj = this.#context.getTextObject()
        textObj.add('block', `${axis} ${path}`);
        if (value) { textObj.add(value); }
        if (scale) { textObj.add(scale) }
        return this.#context;
    }
    
    public entity(path: string, value?: ValueType, scale?: number) {
        const textObj = this.#context.getTextObject()
        textObj.add('entity', this.#target.toString(), path)
        if (value) { textObj.add(value) }
        if (scale) { textObj.add(scale) }
        return this.#context;
    }
   
    public bossbar(id: string, option: BossbarOption = 'value') {
        const textObj = this.#context.getTextObject()
        textObj.add('bossbar', id, option)
        return this.#context;
    }

    public storage(path: string, type: ValueType, scale = 1) {
        const textObj = this.#context.getTextObject()
        textObj.add('storage', this.#target.toString(), path, type, scale)
        return this.#context
    }
}