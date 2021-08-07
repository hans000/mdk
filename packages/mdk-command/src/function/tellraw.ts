import { LineInfo } from 'mdk-core';
import { JText, Selector } from 'mdk-core';

export default function tellraw(target: Selector, msg: string): string
export default function tellraw(target: Selector, json: JText): LineInfo<JText>
export default function tellraw(target: Selector, json: string | JText): string | LineInfo<JText> {
    if (json instanceof JText) {
        return {
            type: 'tellraw',
            text: `tellraw ${target.toString()} ${json}`,
            extra: json,
        }
    }
    return `tellraw ${target.toString()} ${json}`
}