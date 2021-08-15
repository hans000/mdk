import { Selector } from 'mdk-core';

export default teleport

function teleport(targets: Selector, destination: Selector, rotation?: string): string;
function teleport(targets: Selector, location: string): string;
function teleport(arg1: Selector, arg2: string | Selector, arg3?: string) {
    if (arg2 as string) {
        return `teleport ${arg1.toString()} ${arg2}`
    }
    if (arg2 as Selector) {
        return `teleport ${arg1.toString()} ${arg2.toString()}${arg3 === undefined ? '' : ` ${arg3}`}`
    }
}