import { datapack } from "../function"
import { File, ContextAbstract } from 'mdk-core';

export class Datapack extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    
    public disable(packname: string) {
        this.context.add(datapack.disable(packname))
        return this
    }
    
    public enable(packname: string) {
        this.context.add(datapack.enable(packname))
        return this
    }

    public list() {
        this.context.add(datapack.list())
        return this
    }
}