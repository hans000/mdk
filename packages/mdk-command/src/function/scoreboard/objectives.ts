import { Objective } from '@/core/objective'
import { Criteria } from 'mdk-core'
import { ContainerExpection } from 'mdk-core/src/expection'

export default {
    list,
    add,
    remove,
    setdisplay,
    modify,
}

function list() {
    return `scoreboard objectives list`
}

function add(objective: string): string;
function add(objective: string, criterion: Criteria): string;
function add(objective: string, criterion: Criteria, displayName: string): string;
function add(objective: string, criterion: Criteria = 'dummy', displayName?: string) {
    if (displayName) {
        return `scoreboard objectives add ${objective} ${criterion} ${displayName}`
    }
    return `scoreboard objectives add ${objective} ${criterion}`
}

function remove(objective: string) {
    if (! Objective.query(objective)) {
        throw ContainerExpection(`${objective} is not exist in objectives`)
    }
    return `scoreboard objectives remove ${objective}`
}

function setdisplay(slot: string, objective?: string) {
    if (! Objective.query(objective)) {
        throw ContainerExpection(`${objective} is not exist in objectives`)
    }
    return `scoreboard objectives setdisplay ${slot}${objective ? ' ' + objective : ''}`
}

function modify(objective: string, displayName: string) {
    if (! Objective.query(objective)) {
        throw ContainerExpection(`${objective} is not exist in objectives`)
    }
    return `scoreboard objectives modify ${objective} displayname ${displayName}`
}