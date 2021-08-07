export type SaveType =
    | 'hold' 
    | 'query' 
    | 'resume'

export function save(type: SaveType) {
    return `save ${type}`
}

export function saveAll() {
    return `save-all`
}

export function saveOn() {
    return `save-on`
}

export function saveOff() {
    return `save-off`
}