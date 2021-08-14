import { scoreboard } from "@/function"
import { Criteria, Selector, useFile, OperationType, LiteralType } from "mdk-core/src"
import { ContainerExpection } from "mdk-core/src/expection"

const objectives = new Map<string, Objective>()

type ObjectiveProps = {
    name: string
    criterion: Criteria
    displayName?: string
}

export class Objective {
    #name: string
    #criterion: Criteria
    #displayName: string
    #selector: Selector

    /** * 查询积分项 */
    public static query(objective: string) { return objectives.get(objective) }

    /** * 添加此积分项 */
    public static add(objective: string) { objectives.set(objective, new Objective(objective)) }

    constructor(props: LiteralType<ObjectiveProps>, sel: Selector = null) {
        const { name, criterion, displayName } = typeof props === 'string' ? { name: props, criterion: 'dummy', displayName: '' } : props
        this.#name = name
        this.#criterion = criterion as Criteria
        this.#displayName = displayName
        this.#selector = sel
        
        // 校验
        if (Objective.query(name)) {
            throw ContainerExpection('`' + name + '` has existed in objectives')
        }
        
        const file = useFile()
        file.add(scoreboard.objectives.add(name, criterion as Criteria, displayName))
    }

    public get name() { return this.#name }

    public get criterion() { return this.#criterion }

    public get displayName() { return this.#displayName }

    public get selector() { return this.#selector }

    private operation(operarion: OperationType, sources: Objective[]) {
        const file = useFile()
        sources.forEach(s => file.add(`scoreboard players operation ${this.toString()} ${operarion} ${s.toString()}`))
        return this
    }

    /** += */
    public add(...sources: Objective[]) { return this.operation('+=', sources) }
    
    /** -= */
    public remove(...sources: Objective[]) { return this.operation('-=', sources) }
    
    public multiple(...sources: Objective[]) { return this.operation('*=', sources) }
    
    /** /= */
    public divide(...sources: Objective[]) { return this.operation('/=', sources) }
    
    /** %= */
    public mod(...sources: Objective[]) { return this.operation('%=', sources) }
    
    /** < */
    public min(...sources: Objective[]) { return this.operation('<', sources) }
    
    /** > */
    public max(...sources: Objective[]) { return this.operation('>', sources) }
    
    /** >< */
    public swap(...sources: Objective[]) { return this.operation('><', sources) }

    public toString(exacted = false) {
        exacted && this.#selector.exacted()
        return `${this.#selector.toString()} ${this.name}`
    }
}