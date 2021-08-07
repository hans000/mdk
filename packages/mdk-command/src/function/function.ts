import { ToStringAbstract } from 'mdk-core';

export default function $function(name: string | ToStringAbstract) {
    return `function ${name.toString()}`
}