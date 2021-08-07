export default function help(name?: string) {
    return `help${name ? ' ' + name : ''}`
}