import { ItemBase } from "./shared"

export enum GenerationKind {
    Original = 0,
    Copy = 1,
    CopyOfCopy = 2,
}

export interface WritableBook extends Partial<ItemBase> {
    id: WritableBookId,
    resolved?: boolean;
    pages?: string[];
}

export interface WrittenBook extends WritableBook {
    id: WritableBookId,
    generation?: GenerationKind;
    author?: string;
    title?: string;
}

export type WrittenBookId = 'written_book'
export type WritableBookId = 'writable_book'