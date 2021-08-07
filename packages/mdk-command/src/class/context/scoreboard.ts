import { File, ContextAbstract } from 'mdk-core'
import { ObjectiveItem, Selector } from 'mdk-core'
import { Criteria } from 'mdk-core'
import { ContainerExpection } from 'mdk-core/src/expection';

export class Scoreboard extends ContextAbstract {

    readonly #objective: string;
    readonly #criterion: Criteria;
    readonly #displayName: string;

    constructor(context: File, objective: string, criterion: Criteria = 'dummy', displayName?: string) {
        super(context)
        
        if (ObjectiveItem.query(objective)) {
            throw ContainerExpection('`' + objective + '` has existed in objectives')
        }
        ObjectiveItem.add(objective)
        
        this.#objective = objective
        this.#criterion = criterion
        this.#displayName = displayName
        this.context.add(`scoreboard objectives add ${objective}${criterion ? ' ' + criterion : ''}${displayName ? ' ' + displayName : ''}`)
    }
   
    public get criterion() { return this.#criterion }
   
    public get objective() { return this.#objective }
   
    public get displayName() { return this.#displayName }

    //#region 指令
    public add(target: Selector, score: number) {
        const result = `scoreboard players add ${target} ${this.#objective} ${score}`
        this.context.add(result)
    }
  
    public enable(target: Selector) {
        const result = `scoreboard players enable ${target} ${this.#objective}`
        this.context.add(result)
    }
  
    public get(target: Selector) {
        const result = `scoreboard players get ${target} ${this.#objective}`
        this.context.add(result)
    }
  
    public list(target?: Selector) {
        const result = target ? `scoreboard players list ${target}` : `scoreboard players list`
        this.context.add(result)
    }
  
    public listObjectives() {
        const result = `scoreboard objectives list`
        this.context.add(result)
    }

    public operation(target: Selector, operation: string, source: string, sourceObjective: string) {
        const result = `scoreboard players operation ${target} ${this.#objective} ${operation} ${source} ${sourceObjective}`
        this.context.add(result)
    }
 
    public remove(target: Selector, score: number) {
        const result = `scoreboard players remove ${target} ${this.#objective} ${score}`
        this.context.add(result)
    }
   
    public reset(target: Selector) {
        const result = `scoreboard players reset ${target} ${this.#objective}`
        this.context.add(result)
    }
   
    public set(target: Selector, score: number) {
        const result = `scoreboard players set ${target} ${this.#objective} ${score}`
        this.context.add(result)
    }
 
    public setDisplay(slot: string) {
        const result = `scoreboard objectives setdisplay ${slot} ${this.#objective}`
        this.context.add(result)
    }
 
    public removeObjectives() {
        const result = `scoreboard objectives remove ${this.#objective}`
        this.context.add(result)
    }
  
    public modify(displayName: string, ): void;
    public modify(criterion: Criteria, renderType: 'hearts' | 'integer'): void;
    public modify(a: string, b?: string) {
        let result = ''
        if (b) {
            result = `scoreboard objectives modify ${this.#objective} rendertype ${b}`
        }
        result = `scoreboard objectives modify ${this.#objective} displayname ${a}`
        this.context.add(result)
    }
    //#endregion
}