export type LiteralUnion<T extends U, U> = T | (U & {});

export type LiteralFuncType = string | ((context: { filename: string; namespace: string }) => string)