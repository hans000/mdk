/**
 * 命名时名称只识别小写英文字母、数字、-和_
 * @param filename 文件名
 */
export function isValidSpacename(filename: string) {
    return /^[a-z_][a-z_-\d]+$/.test(filename)
}
/**
 * 不能包含 < > ? : * | / \
 * @param filename 文件名
 */
export function isValidSystemFileChar(filename: string) {
    return /^[^\/\\:\*\?<>|]{1,255}$/.test(filename)
}
/**
 * 命名时名称只识别小写英文字母、数字、-和_ /
 * @param filename 文件名
 */
export function isValidPathName(filename: string) {
    return /^[a-z_][a-z_-\d\/\.]*$/.test(filename)
}
/**
 * 命名时名称只识别小写英文字母、数字、-和_ /，如：sys:foo/bar
 * @param filename 文件名
 */
export function isValidDeclareName(filename: string) {
    return /^([a-z_]:)?[a-z_][a-z_-\d\/\.]*[a-z_-\d\.]*$/.test(filename)
}
