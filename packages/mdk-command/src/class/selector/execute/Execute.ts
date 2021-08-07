import { CommandAbstract, File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { ScoreRange, Dimension, StoreOption, AnchorOption } from 'mdk-nbt';
import { Logic, IBlockState } from "./Logic";
import { StoreLogic } from ".";

export type OperationType = 
    | '+='
    | '-='
    | '*='
    | '/='
    | '%='
    | '='
    | '<'
    | '>'
    | '><'

export class Execute extends CommandAbstract {
    readonly #target: Selector

    constructor(context: File, target?: Selector) {
        super(context, 'execute')
        this.#target = target
        target.unexacted()
    }

    //#region 指令相关
    public ifBlock(blockID = 'air', axis = '~ ~ ~', blockState?: IBlockState) {
        this.result.add('if')
        return new Logic(this, this.#target).block(blockID, axis, blockState)
    }
    public unlessBlock(blockID = 'air', axis = '~ ~ ~', blockState?: IBlockState) {
        this.result.add('unless')
        return new Logic(this, this.#target).block(blockID, axis, blockState)
    }
    public ifBlocks() {
        this.result.add('if')
        return new Logic(this, this.#target).blocks()
    }
    public unlessBlocks() {
        this.result.add('unless')
        return new Logic(this, this.#target).blocks()
    }
    public ifScore(sourceTarget: Selector, operation: OperationType): Execute
    public ifScore(sourceTarget: Selector, srouceObjective: string, operation: OperationType): Execute
    public ifScore(arg1: Selector, arg2: string, arg3?: string) {
        if (arg3) {
            this.result.add('if')
            return new Logic(this, this.#target).score(this.#target.toString(), this.#target.objective.name, arg1.toString(), arg2, arg3)
        } else {
            this.result.add('if')
            return new Logic(this, this.#target).score(this.#target.toString(), this.#target.objective.name, this.#target.toString(), arg1.objective.name, arg2)
        }
    }
    public unlessScore(sourceTarget: Selector, operation: OperationType): Execute
    public unlessScore(sourceTarget: Selector, srouceObjective: string, operation: OperationType): Execute
    public unlessScore(arg1: Selector, arg2: string, arg3?: string) {
        if (arg3) {
            this.result.add('unless')
            return new Logic(this, this.#target).score(this.#target.toString(), this.#target.objective.name, arg1.toString(), arg2, arg3)
        } else {
            this.result.add('unless')
            return new Logic(this, this.#target).score(this.#target.toString(), this.#target.objective.name, this.#target.toString(), arg1.objective.name, arg2)
        }
    }
    public ifScoreMatches(range: ScoreRange): Execute;
    public ifScoreMatches(a: any, b?: ScoreRange) {
        this.result.add('if')
        return new Logic(this, this.#target).scoreMatches(a, b)
    }
    public unlessScoreMatches(range: ScoreRange): Execute;
    public unlessScoreMatches(a: any, b?: ScoreRange) {
        this.result.add('unless')
        return new Logic(this, this.#target).scoreMatches(a, b)
    }
    public in(dimension: Dimension = 'overworld') {
        this.result.add(`in ${dimension}`)
        return this
    }
    public store(option: StoreOption = 'result') {
        this.result.add(`store ${option}`)
        return new StoreLogic(this, this.#target)
    }
    public rotatedEntity() {
        this.result.add(`rotated as ${this.#target.toString()}`)
        return this
    }
    public rotated(y: number, x: number) {
        this.result.add(`rotated ${y} ${x}`)
        return this
    }
    public positioned(axis: string) {
        this.result.add(`positioned ${axis}`)
        return this
    }
    public positionedEntity() {
        this.result.add(`positioned as ${this.#target.toString()}`)
        return this
    }
    public align(axis: string = 'xyz') {
        this.result.add(`align ${axis}`)
        return this
    }
    public anchored(type: AnchorOption = 'feet') {
        this.result.add(`anchored ${type}`);
        return this
    }
    public as(target?: string | Selector) {
        const t = target ? target : this.#target
        this.result.add(`as ${t.toString()}`)
        return this
    }
    public at(target?: string | Selector) {
        const t = target ? target : this.#target
        this.result.add(`at ${t.toString()}`)
        return this
    }
    public facing(location: string) {
        this.result.add(`facing ${location}`)
        return this
    }
    public facingEntity(anchorType: AnchorOption = 'feet') {
        this.result.add(`facing entity ${this.#target.toString()} ${anchorType}`)
        return this
    }
    public run(cmd: string) {
        this.context.add(`${this.result} run ${cmd}`)
        // this.result.clear()
    }
    //#endregion
}