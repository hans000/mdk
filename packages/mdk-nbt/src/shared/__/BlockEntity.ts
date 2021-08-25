import { byte, int } from "./numberic";

export interface BlockEntityBase {
    id: string // TODO mdk-nbt 
    keepPacked: byte
    x: int
    y: int
    z: int
}