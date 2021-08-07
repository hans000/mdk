export default {
    list,
    get,
    set,
    add,
    remove,
    reset,
    enable,
    operation
}

function list(target: string) {
    return `scoreboard players list ${target}`
}
function get(target: string, objective: string) {
    return `scoreboard players get ${target} ${objective}`
}
function set(target: string, objective: string, score: number) {
    return `scoreboard players set ${target} ${objective} ${score}`
}
function add(target: string, objective: string, amount: string) {
    return `scoreboard players add ${target} ${objective} ${amount}`
}
function remove(target: string, objective: string, amount: string) {
    return `scoreboard players remove ${target} ${objective} ${amount}`
}
function reset(target: string, objective: string) {
    return `scoreboard players reset ${target} ${objective}`
}
function enable(target: string, objective: string) {
    return `scoreboard players enable ${target} ${objective}`
}
function operation(target: string, targetObjective: string, operation: string, source: string, sourceObjective: string) {
    return `scoreboard players operation ${target} ${targetObjective} ${operation} ${source} ${sourceObjective}`
}