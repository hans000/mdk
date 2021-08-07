/** 游戏模式 */
export type GameMode =
    | 'spectator‌‌'
    | 'adventure'
    | 'creative'
    | 'survival'
    | '!spectator‌‌'
    | '!adventure'
    | '!creative'
    | '!survival'

export enum GameModeKind {
    Survival = 0,
    Creative = 1,
    Adventure = 2,
    Spectator = 3
}
    