import { LineInfo, LiteralType, TextToken } from 'mdk-core';
import { JText, Selector } from 'mdk-core';

export default tellraw

function tellraw(target: Selector, json: LiteralType<TextToken[]>): LiteralType<LineInfo<JText>> {
    if (Array.isArray(json)) {
        return new LineInfo(
            'tellraw',
            `tellraw ${target.toString()} ${JText.format(json)}`,
            json,
        )
    }
    return `tellraw ${target.toString()} ${JText.format(json)}`
}