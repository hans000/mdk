export function wrapScope(tagname: string, scope: string | boolean) {
    // 以`_`开头的名称忽略scope
    if (tagname.startsWith('_') || !scope) {
        return tagname
    }
    return `${scope}_${tagname}`
}