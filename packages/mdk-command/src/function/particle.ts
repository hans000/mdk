import { double, int, ParticleKind } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export type VisibleMode = 'normal' | 'force'
export type ParticleIdType = ParticleKind | keyof typeof ParticleKind

export default particle

function particle(particleId: ParticleIdType, location: string): string;
function particle(particleId: ParticleIdType, location: string, delta: string): string;
function particle(particleId: ParticleIdType, location: string, delta: string, speed: double): string;
function particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int): string;
function particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int, mode: VisibleMode): string;
function particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int, mode: VisibleMode, player: Selector): string;

function particle(particleId: ParticleIdType, location?: string, delta?: string, speed?: double, count?: int, mode?: VisibleMode, player?: Selector) {
    if (player as Selector) {
        return `particle ${particleId} ${location} ${delta} ${speed} ${count} ${mode} ${player.toString()}`
    }
    if (mode as VisibleMode) {
        return `particle ${particleId} ${location} ${delta} ${speed} ${count} ${mode}`
    }
    if (count as int) {
        return `particle ${particleId} ${location} ${delta} ${speed} ${count}`
    }
    if (speed as double) {
        return `particle ${particleId} ${location} ${delta} ${speed}`
    }
    if (delta as string) {
        return `particle ${particleId} ${location} ${delta}`
    }
    return `particle ${particleId} ${location}`
}