import { BlockItemId } from "mdk-nbt/dist/item/__"

export type FillMode = 
    | 'destroy'
    | 'hollow'
    | 'keep'
    | 'outline'
    | 'replace'

export default fill

function fill(from: string, to: string, blockId: BlockItemId): string;
function fill(from: string, to: string, blockId: BlockItemId, mode: FillMode): string;
function fill(from: string, to: string, blockId: BlockItemId, replaceBlockId: string): string;
function fill(from: string, to: string, blockId: BlockItemId, arg?: FillMode | string) {
    if (arg === undefined) {
        return `fill ${from} ${to} ${blockId}`
    }
    if (arg as FillMode) {
        return `fill ${from} ${to} ${blockId} ${arg}`
    }
    return `fill ${from} ${to} ${blockId} replace ${arg}`
}