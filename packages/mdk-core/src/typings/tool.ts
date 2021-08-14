export type ObjectMap<T> = { [prop: string]: T }

export type SingleArrayResult<T> = T | T[]

export type LiteralType<T> = string | T

export type LiteralUnion<T extends U, U> = T | (U & {});

export type LiteralFuncType = string | ((context: { filename: string; namespace: string }) => string)