import { data } from "../../function"
import { Data } from "."

export type GetLogicFn = (context: GetLogic) => Data

export class GetLogic {
    readonly #context: Data
    
    constructor(context: Data) {
        this.#context = context
    }

    public block(targetPos: string, path?: string, scale?: number) {
        this.#context.context.add(data.getBlock(targetPos, path, scale))
        return this.#context
    }

    public entity(target: string, path?: string, scale?: number) {
        this.#context.context.add(data.getEntity(target, path, scale))
        return this.#context
    }

    public storage(target: string, path?: string, scale?: number) {
        this.#context.context.add(data.getStorage(target, path, scale))
        return this.#context
    }
}
