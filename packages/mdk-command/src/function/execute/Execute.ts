import Logic from "./Logic";
import { Selector } from 'mdk-core';
import { ScoreRange, Dimension, StoreOption, AnchorOption, BlockEntityState } from 'mdk-nbt';
import StoreLogic from "./StoreLogic";
import { CommandText } from "mdk-core"
import { ContainerExpection } from "mdk-core/src/expection";
import { Objective } from "@/core/objective";

export default class Execute extends CommandText {

    constructor() {
        super('execute')
    }

    //#region 指令相关
    public ifBlock(blockID = 'air', axis = '~ ~ ~', blockState?: BlockEntityState) {
        this.add('if')
        return new Logic(this).block(blockID, axis, blockState)
    }
    
    public unlessBlock(blockID = 'air', axis = '~ ~ ~', blockState?: BlockEntityState) {
        this.add('unless')
        return new Logic(this).block(blockID, axis, blockState)
    }
    
    public ifBlocks() {
        this.add('if')
        return new Logic(this).blocks()
    }
    
    public unlessBlocks() {
        this.add('unless')
        return new Logic(this).blocks()
    }
    
    public ifScore(target: Selector, objective: string, source: string, srouceObjective: string, operation: string) {
        if (! Objective.query(objective)) {
            throw ContainerExpection(`${objective} is not exist in objectives`)
        }
        this.add('if')
        return new Logic(this).score(target.toString(), objective, source, srouceObjective, operation)
    }
    
    public unlessScore(target: Selector, objective: string, source: string, srouceObjective: string, operation: string) {
        if (! Objective.query(objective)) {
            throw ContainerExpection(`${objective} is not exist in objectives`)
        }
        this.add('unless')
        return new Logic(this).score(target.toString(), objective, source, srouceObjective, operation)
    }
   
    public ifScoreMatches(range: ScoreRange): Execute;
    public ifScoreMatches(selector: string | Selector, range: ScoreRange): Execute;
    public ifScoreMatches(a: any, b?: ScoreRange) {
        this.add('if')
        return new Logic(this).scoreMatches(a, b)
    }
    
    public unlessScoreMatches(range: ScoreRange): Execute;
    public unlessScoreMatches(selector: string | Selector, range: ScoreRange): Execute;
    public unlessScoreMatches(a: any, b?: ScoreRange) {
        this.add('unless')
        return new Logic(this).scoreMatches(a, b)
    }
   
    public in(dimension: Dimension = 'overworld') {
        this.add(`in ${dimension}`)
        return this
    }
   
    public store(option: StoreOption = 'result') {
        this.add(`store ${option}`)
        return new StoreLogic(this)
    }
  
    public rotatedEntity(selector?: string | Selector) {
        if (selector) {
            this.add(`rotated as ${selector.toString()}`)
        } else {
            this.add(`rotated as @e`)
        }
        return this
    }
  
    public rotated(y: number, x: number) {
        this.add(`rotated ${y} ${x}`)
        return this
    }
  
    public positioned(axis: string) {
        this.add(`positioned ${axis}`)
        return this
    }
 
    public positionedEntity(selector: string) {
        if (selector) {
            this.add(`positioned as ${selector.toString()}`)
        } else {
            this.add(`positioned as @s`)
        }
        return this
    }
 
    public align(axis: string = 'xyz') {
        this.add(`align ${axis}`)
        return this
    }
  
    public anchored(type: AnchorOption = 'feet') {
        this.add(type);
        return this
    }
 
    public as(selector?: string | Selector) {
        if (selector) {
            this.add(`as ${selector.toString()}`)
        } else {
            this.add(`as @s`)
        }
        return this
    }
  
    public at(selector?: string | Selector) {
        if (selector) {
            this.add(`at ${selector.toString()}`)
        } else {
            this.add(`at @s`)
        }
        return this
    }
 
    public facing(location: string) {
        this.add(`facing ${location}`)
        return this
    }
 
    public facingEntity(selector: string | Selector, anchorType: AnchorOption = 'feet') {
        if (selector) {
            this.add(`facing entity ${selector.toString()} ${anchorType}`)
        } else {
            this.add(`facing entity @s ${anchorType}`)
        }
        return this
    }
  
    public run(cmd: string) {
        this.add(`${this} run ${cmd}`)
        // this.clear()
    }
    //#endregion
}