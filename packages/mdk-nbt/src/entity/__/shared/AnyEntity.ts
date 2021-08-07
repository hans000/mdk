import { MobBase } from "./MobBase";

export interface AnyEntity extends Partial<Omit<MobBase, 'id'>> {
    [propName: string]: any,
}