import { isValidPathName } from "@utils/rules";
import { FieldExpection } from ".";

export function validPathName(filename: string) {
    if (!isValidPathName(filename)) {
        throw FieldExpection('filename `' + filename + '` cannot contain these chars, like ` < > ? : * | \\`')
    }
}