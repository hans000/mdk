import { Entity } from "mdk-nbt";
import { GsonStringify } from 'mdk-core';

export default function summon(nbt: Entity, location: string = '~ ~ ~') {
    const { id, ...restNbt } = nbt
    return `summon ${id} ${location} ${GsonStringify(restNbt)}`
}