import { File, Criteria, ObjectiveItem, Selector, ContextAbstract } from 'mdk-core'
import { ContainerExpection } from "mdk-core/src/expection";

export class Scoreboard extends ContextAbstract {
    readonly #selector: Selector
    readonly #objective: string;
    readonly #criterion: Criteria;
    readonly #displayName: string;

    constructor(context: File, selector: Selector, objective: string, criterion: Criteria = 'dummy', displayName?: string) {
        super(context)
        if (ObjectiveItem.query(objective)) {
            throw ContainerExpection(`${objective} has existed in objectives`)
        }
        ObjectiveItem.add(objective)

        this.#selector = selector
        this.#objective = objective
        this.#criterion = criterion
        this.#displayName = displayName
        this.context.add(`scoreboard objectives add ${objective}${criterion ? ' ' + criterion : ''}${displayName ? ' ' + displayName : ''}`)
    }
    
    public get criterion() { return this.#criterion }
    
    public get objective() { return this.#objective }
    
    public get displayName() { return this.#displayName }

    //#region 指令
    public add(score: number) {
        const result = `scoreboard players add ${this.#selector} ${this.#objective} ${score}`
        this.context.add(result)
    }
 
    public enable() {
        const result = `scoreboard players enable ${this.#selector} ${this.#objective}`
        this.context.add(result)
    }

    public get() {
        const result = `scoreboard players get ${this.#selector} ${this.#objective}`
        this.context.add(result)
    }
  
    public list() {
        this.context.add(`scoreboard players list ${this.#selector}`)
    }
  
    public operation(operation: string, source: string, sourceObjective: string) {
        const result = `scoreboard players operation ${this.#selector} ${this.#objective} ${operation} ${source} ${sourceObjective}`
        this.context.add(result)
    }
  
    public remove(score: number) {
        const result = `scoreboard players remove ${this.#selector} ${this.#objective} ${score}`
        this.context.add(result)
    }
 
    public reset() {
        const result = `scoreboard players reset ${this.#selector} ${this.#objective}`
        this.context.add(result)
    }
  
    public set(score: number) {
        const result = `scoreboard players set ${this.#selector} ${this.#objective} ${score}`
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
    
    public listObjectives() {
        const result = `scoreboard objectives list`
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