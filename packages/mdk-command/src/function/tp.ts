import { Selector } from 'mdk-core';


function tp(targets: Selector, destination: Selector, rotation?: string): string;
function tp(targets: Selector, location: string): string;
function tp(arg1: Selector, arg2: string | Selector, arg3?: string) {
    if (arg2 as string) {
        return `tp ${arg1.toString()} ${arg2}`
    }
    if (arg2 as Selector) {
        return `tp ${arg1.toString()} ${arg2.toString()}${arg3 === undefined ? '' : ` ${arg3}`}`
    }
}

export default tp