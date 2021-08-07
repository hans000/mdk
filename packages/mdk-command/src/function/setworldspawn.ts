export default setworldspawn

/**
 * 设置世界出生点。
 */
function setworldspawn(): string;
/**
 * 设置世界出生点。
 * @param location 坐标
 */
function setworldspawn(location: string): string;
function setworldspawn(location?: string) {
    if (location as string) {
        return `setworldspawn ${location}`
    }
    return `setworldspawn`
}