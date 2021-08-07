export interface CloneOptions {
    from: string;
    to: string;
    dist: string;
    maskMode?: MaskMode;
    cloneMode?: CloneMode;
    blockId?: string;
}

export type MaskMode = 'filtered' | 'replace' | 'masked'

export type CloneMode = 'force' | 'move' | 'normal'

export default clone

function clone(options: CloneOptions): string;
function clone(from: string, to: string, dist: string): string;
function clone(from: string, to: string, dist: string, maskMode: MaskMode): string;
function clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode): string;
function clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode, blockId: string): string;
function clone(from: string | CloneOptions, to?: string, dist?: string, arg?: MaskMode, arg2?: CloneMode) {
    if (typeof from === 'object') {
        const { from: f, to, dist, maskMode, cloneMode, blockId } = from;
        let result = `clone ${f} ${to} ${dist}`
        if (maskMode) {
            result += ` ${maskMode}`
        }
        if (cloneMode) {
            result += ` ${cloneMode}`
        }
        if (blockId) {
            result += ` ${blockId}`
        }
        return result
    }
    if (arg === undefined) {
        return `clone ${from} ${to} ${dist}`
    }
    if (arg as MaskMode) {
        return `clone ${from} ${to} ${dist} ${arg}`
    }
    if (arg2 as CloneMode) {
        return `clone ${from} ${to} ${dist} replace ${arg} ${arg2}`
    }
    return `clone ${from} ${to} ${dist} replace ${arg} ${arg2}`
}