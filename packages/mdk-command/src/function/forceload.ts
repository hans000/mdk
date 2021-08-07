export default {
    add,
    remove,
    removeAll,
    query,
}

function add(x1: number, z1: number, x2: number, z2: number) {
    return `forceload add ${x1} ${z1} ${x2} ${z2}`
}

function remove(x1: number, z1: number, x2: number, z2: number) {
    return `forceload remove ${x1} ${z1} ${x2} ${z2}`
}

function removeAll() {
    return `forceload remove all`
}

function query(x: number, z: number) {
    return `forceload query ${x} ${z}`
}