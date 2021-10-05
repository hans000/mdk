export class CommandText {
    #text: string;

    constructor(text: string) {
        this.#text = text + ' '
    }
    
    public add(...text: (string | number)[]) {
        this.#text += text.join(' ') + ' '
        return this
    }
    
    public clear() {
        this.#text = ''
        return this
    }
    
    public toString() {
        return this.#text.trim()
    }
}
