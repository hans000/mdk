import { File } from 'mdk-core';
import { ContextAbstract } from "mdk-core";
import { forceload } from "../function";

export class Forceload extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public add(x1: number, z1: number, x2: number, z2: number) {
        this.context.add(forceload.add(x1, z1, x2, z2))
        return this
    }
    
    public remove(x1: number, z1: number, x2: number, z2: number) {
        this.context.add(forceload.add(x1, z1, x2, z2))
        return this
    }
    
    public removeAll() {
        this.context.add(forceload.removeAll())
        return this
    }
    
    public query(x: number, z: number) {
        this.context.add(forceload.query(x, z))
        return this
    }
}