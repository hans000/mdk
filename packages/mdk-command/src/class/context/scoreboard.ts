import { Objective } from '@/core/objective'
import { File, ContextAbstract } from 'mdk-core'
import { Selector } from 'mdk-core'
import { Criteria } from 'mdk-core'

export class Scoreboard extends ContextAbstract {

    readonly #objective: Objective

    constructor(context: File, objective: Objective) {
        super(context)
        this.#objective = objective
    }

    get item() { return this.#objective }
   
    public add(target: Selector, score: number) {
        const result = `scoreboard players add ${target} ${this.#objective.name} ${score}`
        this.context.add(result)
    }
  
    public enable(target: Selector) {
        const result = `scoreboard players enable ${target} ${this.#objective.name}`
        this.context.add(result)
    }
  
    public get(target: Selector) {
        const result = `scoreboard players get ${target} ${this.#objective.name}`
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
        const result = `scoreboard players operation ${target} ${this.#objective.name} ${operation} ${source} ${sourceObjective}`
        this.context.add(result)
    }
 
    public remove(target: Selector, score: number) {
        const result = `scoreboard players remove ${target} ${this.#objective.name} ${score}`
        this.context.add(result)
    }
   
    public reset(target: Selector) {
        const result = `scoreboard players reset ${target} ${this.#objective.name}`
        this.context.add(result)
    }
   
    public set(target: Selector, score: number) {
        const result = `scoreboard players set ${target} ${this.#objective.name} ${score}`
        this.context.add(result)
    }
 
    public setDisplay(slot: string) {
        const result = `scoreboard objectives setdisplay ${slot} ${this.#objective.name}`
        this.context.add(result)
    }
 
    public removeObjectives() {
        const result = `scoreboard objectives remove ${this.#objective.name}`
        this.context.add(result)
    }
  
    public modify(displayName: string, ): void;
    public modify(criterion: Criteria, renderType: 'hearts' | 'integer'): void;
    public modify(a: string, b?: string) {
        let result = ''
        if (b) {
            result = `scoreboard objectives modify ${this.#objective.name} rendertype ${b}`
        }
        result = `scoreboard objectives modify ${this.#objective.name} displayname ${a}`
        this.context.add(result)
    }
}