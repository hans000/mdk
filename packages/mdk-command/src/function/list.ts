export default function list(uuids?: string) {
    return `list${uuids ? ' ' + uuids : ''}`
}