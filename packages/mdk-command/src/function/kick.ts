import { Selector } from 'mdk-core';

export default kick

function kick(player: Selector): string;
function kick(player: Selector, reason: string): string;
function kick(player: Selector, reason?: string) {
    if (reason as string) {
        return `kick ${player.toString} ${reason}`
    }
    return `kick ${player.toString}`
}