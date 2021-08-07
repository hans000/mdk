import { File } from 'mdk-core';
import { ContextAbstract } from "mdk-core";
import { data } from "../function";

export class Data extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public get modifyBlock() {
        return data.modifyBlock
    }
    public get modifyEntity() {
        return data.modifyEntity
    }
    public get modifyStorage() {
        return data.modifyStorage
    }

    public getBlock(targetPos: string, path?: string, scale?: number) {
        this.context.add(data.getBlock(targetPos, path, scale))
        return this
    }

    public getEntity(target: string, path?: string, scale?: number) {
        this.context.add(data.getEntity(target, path, scale))
        return this
    }

    public getStorage(target: string, path?: string, scale?: number) {
        this.context.add(data.getStorage(target, path, scale))
        return this
    }
    public mergeBlock(targetPos: string, path?: string, scale?: number) {
        this.context.add(data.mergeBlock(targetPos, path, scale))
        return this
    }

    public mergeEntity(target: string, path?: string, scale?: number) {
        this.context.add(data.mergeEntity(target, path, scale))
        return this
    }

    public mergeStorage(target: string, path?: string, scale?: number) {
        this.context.add(data.mergeStorage(target, path, scale))
        return this
    }
    
    public removeBlock(targetPos: string, path?: string) {
        this.context.add(data.removeBlock(targetPos, path))
        return this
    }

    public removeEntity(target: string, path?: string) {
        this.context.add(data.removeEntity(target, path))
        return this
    }

    public removeStorage(target: string, path?: string) {
        this.context.add(data.removeStorage(target, path))
        return this
    }
}