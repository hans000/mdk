import { File, ContextAbstract } from 'mdk-core'
import { Selector } from 'mdk-core'
import attr, { AttributeModifier } from "../../function/attribute"

export class Attribute extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    
    public get(target: Selector, attribute: string, scale = 1) {
        this.context.add(attr.get(target, attribute, scale))
        return this
    }

    public getBase(target: Selector, attribute: string, scale = 1) {
        this.context.add(attr.getBase(target, attribute, scale))
        return this
    }

    public setBase(target: Selector, attribute: string, value: number) {
        this.context.add(attr.setBase(target, attribute, value))
        return this
    }

    public add(target: Selector, attribute: string, uuid: string, name: string, value: string, type: AttributeModifier = 'add') {
        this.context.add(attr.add(target, attribute, uuid, name, value, type))
        return this
    }

    public remove(target: Selector, attribute: string, uuid: string) {
        this.context.add(attr.remove(target, attribute, uuid))
        return this
    }

    public getValue(target: Selector, attribute: string, uuid: string, scale: number) {
        this.context.add(attr.getValue(target, attribute, uuid, scale))
        return this
    }
}