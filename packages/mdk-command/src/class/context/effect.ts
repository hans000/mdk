import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { int, byte, EffectId } from 'mdk-nbt';
import { effect } from "../../function";
import { ContextAbstract } from "mdk-core";

export class Effect extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public clear(player: Selector): void
    public clear(player: Selector, effectId: EffectId): void
    public clear(player: Selector, effectId?: EffectId) {
        this.context.add(effect.clear(player, effectId))
    }

    public give(player: Selector, effectId: EffectId): void
    public give(player: Selector, effectId: EffectId, duration: int): void
    public give(player: Selector, effectId: EffectId, duration: int, amplifier: byte): void
    public give(player: Selector, effectId: EffectId, duration: int, amplifier: byte, hideParticles: boolean): void
    public give(player: Selector, effectId: EffectId, duration?: int, amplifier?: byte, hideParticles?: boolean) {
        this.context.add(effect.give(player, effectId, duration, amplifier, hideParticles))
    }
}