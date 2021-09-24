import { File, LiteralUnion, Selector } from 'mdk-core';
import { Dimension, AnchorOption } from 'mdk-nbt';
import { Logic, ConditionFn } from "./Logic";
import { StoreFn, StoreLogic } from "./StoreLogic";
import { CommandAbstract } from "mdk-core";

export type SwizzleType = 'x' | 'y' | 'z' | 'xy' | 'xz' | 'yz' | 'xyz'

export class Execute extends CommandAbstract {

    constructor(context: File) {
        super(context, 'execute')
    }

    //#region 指令相关
    public align(swizzle: SwizzleType = 'xyz') {
        this.result.add(`align ${swizzle}`)
        return this
    }
    public anchored(type: AnchorOption = 'feet') {
        this.result.add(type);
        return this
    }
    public as(target: string | Selector = '@s') {
        this.result.add(`as ${target.toString()}`)
        return this
    }
    public at(target: string | Selector = '@s') {
        this.result.add(`at ${target.toString()}`)
        return this
    }
    public facing(location: string = '~ ~ ~') {
        this.result.add(`facing ${location}`)
        return this
    }
    public facingEntity(target: string | Selector = '@s', anchorType: AnchorOption = 'feet') {
        this.result.add(`facing entity ${target.toString()} ${anchorType}`)
        return this
    }
    public in(dimension: LiteralUnion<Dimension, string> = 'overworld') {
        this.result.add(`in ${dimension}`)
        return this
    }
    public positioned(coordicate: string = '~ ~ ~') {
        this.result.add(`positioned ${coordicate}`)
        return this
    }
    public positionedEntity(target: string | Selector = '@s') {
        this.result.add(`positioned as ${target.toString()}`)
        return this
    }
    public rotated(y: number, x: number) {
        this.result.add(`rotated ${y} ${x}`)
        return this
    }
    public rotatedEntity(target: string | Selector = '@s') {
        this.result.add(`rotated as ${target.toString()}`)
        return this
    }
    public if(fn: ConditionFn) {
        this.result.add('if')
        return fn(new Logic(this))
    }
    public unless(fn: ConditionFn) {
        this.result.add('unless')
        return fn(new Logic(this))
    }
    public storeResult(fn: StoreFn) {
        this.result.add(`store result`)
        return fn(new StoreLogic(this))
    }
    public storeSuccess(fn: StoreFn) {
        this.result.add(`store success`)
        return fn(new StoreLogic(this))
    }
    public run(cmd: string) {
        this.context.add(`${this.result} run ${cmd}`)
        this.result.clear()
    }
    //#endregion
}