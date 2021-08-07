import { GsonStringify } from "@utils/index";

export abstract class NbtAbstract<T> {
    #nbt: T
    constructor(nbt: T) {
        this.#nbt = nbt
    }

    public get nbt() { return this.#nbt }

    public toString() {
        const { id, ...restNbt } = this.#nbt as any
        return GsonStringify(restNbt)
    }
}