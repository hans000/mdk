import { scoreboard } from "@/function"
import { Selector, JText, TextToken, useFile, ContainerExpection, Criteria, LiteralType, OperationType, useScope, ContextAbstract, File } from "mdk-core"

const __objectives = new Map<string, Objective>()

export type ObjectiveProps = {
    name: string
    criterion: Criteria
    displayName?: string
}

const __DEV__ = process.env.__DEV__

export class Objective extends ContextAbstract {
    #name: string
    #criterion: Criteria
    #displayName: string
    #selector: Selector

    /**
     * **commands** /scoreboard objectives list
     */
    public static list() {
        const file = useFile()
        file.add(scoreboard.objectives.list())
    }
    /**
     * **commands** /scoreboard objectives remove
     */
    public static remove(objective: LiteralType<Objective>) {
        const name = typeof objective === 'string' ? objective : objective.name
        if (! __DEV__) {
            if (! Objective.query(name)) {
                throw ContainerExpection('this `', name, '` objective is not exist in objectives')
            }
        }
        const file = useFile()
        file.add(scoreboard.objectives.remove(name))
    }

    public static setdisplay(slot: string, objective?: LiteralType<Objective>) {
        const name = typeof objective === 'string' ? objective : objective.name 
        if (! __DEV__) {
            if (! Objective.query(name)) {
                throw ContainerExpection(`${name} is not exist in objectives`)
            }
        }
        const file = useFile()
        file.add(scoreboard.objectives.setdisplay(slot, name))
    }

    public static modify(objective: LiteralType<Objective>, displayName: LiteralType<TextToken[]>) {
        const name = typeof objective === 'string' ? objective : objective.name 
        if (! __DEV__) {
            if (! Objective.query(name)) {
                throw ContainerExpection(`${name} is not exist in objectives`)
            }
        }
        const file = useFile()
        file.add(scoreboard.objectives.modify(name, JText.format(displayName)))
    }

    /** * 查询积分项 */
    public static query(objective: string) { return __objectives.get(objective) }

    /** * 添加此积分项 */
    public static add(objective: string) { __objectives.set(objective, new Objective(objective)) }

    constructor(props: LiteralType<ObjectiveProps>, sel: Selector = null)  {
        super(useFile() as File)

        let { name, criterion, displayName } = typeof props === 'string' ? { name: props, criterion: 'dummy', displayName: '' } : props
        
        const file = useFile()

        const scopename = useScope(name)
        this.#name = scopename
        this.#criterion = criterion as Criteria
        this.#displayName = displayName
        this.#selector = sel
        
        // 校验
        if (Objective.query(scopename)) {
            throw ContainerExpection('`' + scopename + '` has existed in objectives')
        }

        __objectives.set(scopename, this)
        
        file.add(scoreboard.objectives.add(scopename, criterion as Criteria, displayName))
    }

    public get name() { return this.#name }

    public get criterion() { return this.#criterion }

    public get displayName() { return this.#displayName }

    public get selector() { return this.#selector }

    private operation(operarion: OperationType, sources: Objective[]) {
        sources.forEach(s => this.context.add(`scoreboard players operation ${this.toString()} ${operarion} ${s.toString()}`))
        return this
    }

    /** += */
    public add(...sources: Objective[]) { return this.operation('+=', sources) }
    
    /** -= */
    public remove(...sources: Objective[]) { return this.operation('-=', sources) }
    
    /** *= */
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
        if (exacted) {
            this.#selector.exacted()
        }
        return `${this.#selector.toString()} ${this.name}`
    }
}