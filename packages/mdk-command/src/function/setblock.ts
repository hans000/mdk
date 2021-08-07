export type SetblockMode = 'destroy' | 'keep' | 'replace'

function setblock(coordiante: string, blockId: string): string;
function setblock(coordiante: string, blockId: string, mode: SetblockMode): string;
function setblock(coordiante: string, blockId: string, arg?: SetblockMode) {
    if (arg === undefined) {
        return `setblock ${coordiante} ${blockId}`
    }
    return `setblock ${coordiante} ${blockId} ${arg}`
}

export default setblock