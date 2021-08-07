import { datapack } from "../function"
import { File, ContextAbstract } from 'mdk-core';


export class Datapack extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    public disable(packName: string) {
        this.context.add(datapack.disable(packName))
    }
    public enable(packName: string) {
        this.context.add(datapack.enable(packName))
    }
    public list() {
        this.context.add(datapack.list())
    }
}