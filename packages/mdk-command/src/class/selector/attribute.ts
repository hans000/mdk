import { ContextAbstract, File } from 'mdk-core'
import { Selector } from 'mdk-core'
import attr, { AttributeModifier } from "../../function/attribute"

export class Attribute extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
    }
    
    public get(attribute: string, scale = 1) {
        this.context.add(attr.get(this.#target, attribute, scale))
        return this
    }

    public getBase(attribute: string, scale = 1) {
        this.context.add(attr.getBase(this.#target, attribute, scale))
        return this
    }

    public setBase(attribute: string, value: number) {
        this.context.add(attr.setBase(this.#target, attribute, value))
        return this
    }

    public add(attribute: string, uuid: string, name: string, value: string, type: AttributeModifier = 'add') {
        this.context.add(attr.add(this.#target, attribute, uuid, name, value, type))
        return this
    }

    public remove(attribute: string, uuid: string) {
        this.context.add(attr.remove(this.#target, attribute, uuid))
        return this
    }

    public getValue(attribute: string, uuid: string, scale: number) {
        this.context.add(attr.getValue(this.#target, attribute, uuid, scale))
        return this
    }
}