import { Selector } from 'mdk-core';

export default {
    grant: {
        everything: grantEverything,
        only: grantOnly,
        from: grantFrom,
        through: grantThrough,
        until: grantUntil,
    },
    revoke: {
        everything: revokeEverything,
        only: revokeOnly,
        from: revokeFrom,
        through: revokeThrough,
        until: revokeUntil,
    },
}

function grantEverything(selector: Selector) {
    return `advancement grant ${selector.toString()} everything`
}
function grantOnly(selector: Selector, advancement: string, criterion?: string) {
    if (criterion) {
        return `advancement grant ${selector.toString()} only ${advancement} ${criterion}`
    }
    return `advancement grant ${selector.toString()} only ${advancement}`
}
function grantFrom(selector: Selector, advancement: string) {
    return `advancement grant ${selector.toString()} from ${advancement}`
}
function grantThrough(selector: Selector, advancement: string) {
    return `advancement grant ${selector.toString()} througth ${advancement}`
}
function grantUntil(selector: Selector, advancement: string) {
    return `advancement grant ${selector.toString()} until ${advancement}`
}

function revokeEverything(selector: Selector) {
    return `advancement revoke ${selector.toString()} everything`
}
function revokeOnly(selector: Selector, advancement: string, criterion?: string) {
    if (criterion) {
        return `advancement revoke ${selector.toString()} only ${advancement} ${criterion}`
    }
    return `advancement revoke ${selector.toString()} only ${advancement}`
}
function revokeFrom(selector: Selector, advancement: string) {
    return `advancement revoke ${selector.toString()} from ${advancement}`
}
function revokeThrough(selector: Selector, advancement: string) {
    return `advancement revoke ${selector.toString()} througth ${advancement}`
}
function revokeUntil(selector: Selector, advancement: string) {
    return `advancement revoke ${selector.toString()} until ${advancement}`
}