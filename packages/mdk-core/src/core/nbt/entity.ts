import { File } from "@core/file"
import { NbtAbstract } from "./NbtAbstract"
import { Entity } from 'mdk-nbt'
import { __MDK__DEV__ } from "@dev/index"
import { warn, ContainerExpection } from "@tools/expection"
import { useFile, useCommand } from "@/hooks"

export class NbtEntity<T extends Entity> extends NbtAbstract<T> {
    constructor(nbt: T) {
        super(nbt)
    }
    public summon(location?: string) {
        const file = useFile()
        const { summon } = useCommand()
        if (file instanceof File) {
            // @ts-ignore
            if (file.__DEV__) {
                summon(this.nbt, location)
                warn('created a temporary `File` object, please use `summon` method in createFile')
            } else {
                summon(this.nbt, location)
            }
        } else {
            throw ContainerExpection('please use `summon` method in createFile')
        }
    }
    public override toString() {
        return `${super.toString()}`
    }
}

export function createEntity(nbt: Entity) {
    return new NbtEntity(nbt)
}