import { Selector } from 'mdk-core';

export type BanTargetType = 'ips' | 'players'

export function ban(targets: Selector, reason?: string) {
    return `ban ${targets.toString()}${reason ? ' ' + reason : ''}`
}

export function banIp(ip: string, reason?: string) {
    return `ban-ip ${ip}${reason ? ' ' + reason : ''}`
}

export function banList(type?: BanTargetType) {
    return type ? `banlist ${type}` : `banlist`
}