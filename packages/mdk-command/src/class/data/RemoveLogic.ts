import { data } from "../../function"
import { Data } from "."

export type RemoveLogicFn = (context: RemoveLogic) => Data

export class RemoveLogic {
    readonly #context: Data
    
    constructor(context: Data) {
        this.#context = context
    }

    public block(targetPos: string, path?: string) {
        this.#context.context.add(data.removeBlock(targetPos, path))
        return this.#context
    }

    public entity(target: string, path?: string) {
        this.#context.context.add(data.removeEntity(target, path))
        return this.#context
    }

    public storage(target: string, path?: string) {
        this.#context.context.add(data.removeStorage(target, path))
        return this.#context
    }
}
