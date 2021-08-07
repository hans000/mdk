import { revise } from 'mdk-core'

export type ModifierType = 
    | 'append'
    | 'insert'
    | 'merge'
    | 'prepend'
    | 'set'

const _modifyBlock = {
    fromBlock(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify block ${targetPos} ${path} ${type} from block ${sourcePos} ${sourcePath}`)
    },
    fromEntity(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify block ${targetPos} ${path} ${type} from entity ${sourcePos} ${sourcePath}`)
    },
    fromStorage(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify block ${targetPos} ${path} ${type} from storage ${sourcePos} ${sourcePath}`)
    },
    value(targetPos: string, path: string, type: ModifierType, nbt: string) {
        return revise(`data modify block ${targetPos} ${path} ${type} value ${nbt}`)
    },
}

const _modifyEntity = {
    fromBlock(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify entity ${targetPos} ${path} ${type} from block ${sourcePos} ${sourcePath}`)
    },
    fromEntity(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify entity ${targetPos} ${path} ${type} from entity ${sourcePos} ${sourcePath}`)
    },
    fromStorage(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify entity ${targetPos} ${path} ${type} from storage ${sourcePos} ${sourcePath}`)
    },
    value(targetPos: string, path: string, type: ModifierType, nbt: string) {
        return revise(`data modify entity ${targetPos} ${path} ${type} value ${nbt}`)
    },
}

const _modifyStorage = {
    fromBlock(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify storage ${targetPos} ${path} ${type} from block ${sourcePos} ${sourcePath}`)
    },
    fromEntity(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify storage ${targetPos} ${path} ${type} from entity ${sourcePos} ${sourcePath}`)
    },
    fromStorage(targetPos: string, path: string, type: ModifierType, sourcePos: string, sourcePath: string) {
        return revise(`data modify storage ${targetPos} ${path} ${type} from storage ${sourcePos} ${sourcePath}`)
    },
    value(targetPos: string, path: string, type: ModifierType, nbt: string) {
        return revise(`data modify storage ${targetPos} ${path} ${type} value ${nbt}`)
    },
}

export default {
    getBlock,
    getEntity,
    getStorage,
    mergeBlock,
    mergeEntity,
    mergeStorage,
    removeStorage,
    removeBlock,
    removeEntity,
    modifyBlock: _modifyBlock,
    modifyEntity: _modifyEntity,
    modifyStorage: _modifyStorage,
}

function getBlock(targetPos: string, path?: string, scale?: number) {
    return revise(`data get block ${targetPos} ${path} ${scale}`)
}
function getEntity(target: string, path?: string, scale?: number) {
    return revise(`data get entity ${target} ${path} ${scale}`)
}
function getStorage(target: string, path?: string, scale?: number) {
    return revise(`data get storage ${target} ${path} ${scale}`)
}

function mergeBlock(targetPos: string, path?: string, scale?: number) {
    return revise(`data merge block ${targetPos} ${path} ${scale}`)
}
function mergeEntity(target: string, path?: string, scale?: number) {
    return revise(`data merge entity ${target} ${path} ${scale}`)
}
function mergeStorage(target: string, path?: string, scale?: number) {
    return revise(`data merge storage ${target} ${path} ${scale}`)
}

function removeStorage(target: string, path?: string) {
    return revise(`data remove storage ${target} ${path}`)
}
function removeBlock(targetPos: string, path?: string) {
    return revise(`data remove block ${targetPos} ${path}`)
}
function removeEntity(target: string, path?: string) {
    return revise(`data remove entity ${target} ${path}`)
}