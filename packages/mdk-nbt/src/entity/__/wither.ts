import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface Wither extends Omit<MobBase, 'id'> {
    id: WitherId,
    Invul?: int,
}

export type WitherId = 'wither'