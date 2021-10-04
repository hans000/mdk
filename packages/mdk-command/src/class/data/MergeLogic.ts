import { data } from "../../function"
import { Data } from "."

export type MergeLogicFn = (context: MergeLogic) => Data

export class MergeLogic {
    readonly #context: Data
    
    constructor(context: Data) {
        this.#context = context
    }

    public block(targetPos: string, path?: string) {
        this.#context.context.add(data.mergeBlock(targetPos, path))
        return this.#context
    }

    public entity(target: string, path?: string) {
        this.#context.context.add(data.mergeEntity(target, path))
        return this.#context
    }

    public storage(target: string, path?: string) {
        this.#context.context.add(data.mergeStorage(target, path))
        return this.#context
    }
}
