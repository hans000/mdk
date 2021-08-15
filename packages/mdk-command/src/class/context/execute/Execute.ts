import { File, OperationType, Selector } from 'mdk-core';
import { ScoreRange, Dimension, StoreOption, AnchorOption } from 'mdk-nbt';
import { Logic, IBlockState } from "./Logic";
import { StoreLogic } from "./StoreLogic";
import { CommandAbstract } from "mdk-core";
import * as _ from '../../../function'

export class Execute extends CommandAbstract {

    constructor(context: File) {
        super(context, 'execute')
    }

    //#region 指令相关
    public ifBlock(blockID = 'air', axis = '~ ~ ~', blockState?: IBlockState) {
        this.result.add('if')
        return new Logic(this).block(blockID, axis, blockState)
    }
    public unlessBlock(blockID = 'air', axis = '~ ~ ~', blockState?: IBlockState) {
        this.result.add('unless')
        return new Logic(this).block(blockID, axis, blockState)
    }
    public ifBlocks() {
        this.result.add('if')
        return new Logic(this).blocks()
    }
    public unlessBlocks() {
        this.result.add('unless')
        return new Logic(this).blocks()
    }
    public ifScore(target: string, objective: string, source: string, srouceObjective: string, operation: OperationType) {
        this.result.add('if')
        return new Logic(this).score(target, objective, source, srouceObjective, operation)
    }
    public unlessScore(target: string, objective: string, source: string, srouceObjective: string, operation: OperationType) {
        this.result.add('unless')
        return new Logic(this).score(target, objective, source, srouceObjective, operation)
    }
    public ifScoreMatches(range: ScoreRange): Execute;
    public ifScoreMatches(target: string, range: ScoreRange): Execute;
    public ifScoreMatches(a: any, b?: ScoreRange) {
        this.result.add('if')
        return new Logic(this).scoreMatches(a, b)
    }
    public unlessScoreMatches(range: ScoreRange): Execute;
    public unlessScoreMatches(target: string, range: ScoreRange): Execute;
    public unlessScoreMatches(a: any, b?: ScoreRange) {
        this.result.add('unless')
        return new Logic(this).scoreMatches(a, b)
    }
    public in(dimension: Dimension = 'overworld') {
        this.result.add(`in ${dimension}`)
        return this
    }
    public store(option: StoreOption = 'result') {
        this.result.add(`store ${option}`)
        return new StoreLogic(this)
    }
    public rotatedEntity(target?: string) {
        target = target ? target : '@s'
        this.result.add(`rotated as ${target}`)
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
    public positionedEntity(target: string) {
        target = target ? target : '@s'
        this.result.add(`positioned as ${target}`)
        return this
    }
    public align(axis: string = 'xyz') {
        this.result.add(`align ${axis}`)
        return this
    }
    public anchored(type: AnchorOption = 'feet') {
        this.result.add(type);
        return this
    }
    public as(target?: string) {
        target = target ? target : '@s'
        this.result.add(`as ${target}`)
        return this
    }
    public at(target?: string) {
        target = target ? target : '@s'
        this.result.add(`at @s`)
        return this
    }
    public facing(location: string) {
        this.result.add(`facing ${location}`)
        return this
    }
    public facingEntity(target: string, anchorType: AnchorOption = 'feet') {
        target = target ? target : '@s'
        this.result.add(`facing entity ${target} ${anchorType}`)
        return this
    }
    public run(cmd: string) {
        this.context.add(`${this.result} run ${cmd}`)
        this.result.clear()
    }
    //#endregion
}