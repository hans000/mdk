import { ContainerExpection } from "@/expection"
import { useFile } from "@core/hooks"
import { OperartionType } from "@typings/index"
import { Selector, selector } from "./Selector"

const objectives = new Map<string, ObjectiveItem>()

export class ObjectiveItem {
    #name: string
    #selector: Selector

    /** * 查询积分项 */
    public static query(objective: string) { return objectives.get(objective) }

    /** * 添加此积分项 */
    public static add(objective: string) { objectives.set(objective, new ObjectiveItem(objective)) }

    constructor(objectiveName: string, sel: Selector = selector()) {
        // 校验
        if (ObjectiveItem.query(objectiveName)) {
            throw ContainerExpection('`' + objectiveName + '` has existed in objectives')
        }

        this.#name = objectiveName
        this.#selector = sel
    }

    public get name() { return this.#name }

    public get selector() { return this.#selector }

    private operation(operarion: OperartionType, sources: ObjectiveItem[]) {
        const file = useFile()
        sources.forEach(s => file.add(`scoreboard players operation ${this.toString()} ${operarion} ${s.toString()}`))
        return this
    }

    public add(...sources: ObjectiveItem[]) { return this.operation('+=', sources) }
    
    public remove(...sources: ObjectiveItem[]) { return this.operation('-=', sources) }
    
    public multiple(...sources: ObjectiveItem[]) { return this.operation('*=', sources) }
    
    public divide(...sources: ObjectiveItem[]) { return this.operation('/=', sources) }
    
    public mod(...sources: ObjectiveItem[]) { return this.operation('%=', sources) }
    
    public min(...sources: ObjectiveItem[]) { return this.operation('<', sources) }
    
    public max(...sources: ObjectiveItem[]) { return this.operation('>', sources) }
    
    public swap(...sources: ObjectiveItem[]) { return this.operation('><', sources) }

    public toString(exacted = false) {
        exacted && this.#selector.exacted()
        return `${this.#selector.toString()} ${this.#name}`
    }
}