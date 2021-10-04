import { Data } from "."
import { ModifierType } from "@/function/data"

export type ModifyLogicFn = (context: ModifyLogic) => Data

export class ModifyLogic {
    readonly #context: Data
    
    constructor(context: Data) {
        this.#context = context
    }

    public block(targetPos: string, path: string, type: ModifierType) {
        this.#context.getTextObject().add('data modify block', targetPos, path, type)
        return new ModifyFrom(this.#context)
    }

    public entity(target: string, path: string, type: ModifierType) {
        this.#context.getTextObject().add('data modify entity', target, path, type)
        return new ModifyFrom(this.#context)
    }

    public storage(target: string, path: string, type: ModifierType) {
        this.#context.getTextObject().add('data modify storage', target, path, type)
        return new ModifyFrom(this.#context)
    }
}

class ModifyFrom {
    readonly #context: Data

    constructor(context: Data) {
        this.#context = context
    }

    private handle(...args: string[]) {
        const commandText = this.#context.getTextObject()
        commandText.add(...args)
        this.#context.context.add(commandText.toString())
        commandText.clear()
        return this.#context
    }

    public fromBlock(sourcePos: string, sourcePath: string) {
        return this.handle('from block', sourcePos, sourcePath)
    }

    public fromEntity(sourceTarget: string, sourcePath: string) {
        return this.handle('from entity', sourceTarget, sourcePath)
    }

    public fromStorage(source: string, sourcePath: string) {
        return this.handle('from storage', source, sourcePath)
    }

    public value(path: string) {
        return this.handle('value', path)
    }
}