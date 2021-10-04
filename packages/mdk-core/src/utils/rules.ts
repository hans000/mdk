/**
 * 命名空间只识别小写英文字母、数字、-、_和.
 * @param filename 文件名
 */
export function isValidSpacename(filename: string) {
    return /^[_a-z\d\-\.]+$/.test(filename)
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
    return /^[_a-z\d\-\.\/]*$/.test(filename)
}
/**
 * 命名时名称只识别小写英文字母、数字、- _ / . 如：sys:foo/bar
 * @param filename 文件名
 */
export function isValidDeclareName(filename: string) {
    return /^([_a-z\d\-\.]+:)?([_a-z\d\-\.\/]+)$/.test(filename)
}
