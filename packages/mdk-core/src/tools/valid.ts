import { FieldExpection } from "@/expection";
import { isValidPathName } from "@utils/rules";

export function validPathName(filename: string) {
    if (!isValidPathName(filename)) {
        throw FieldExpection('filename `' + filename + '` cannot contain these chars, like ` < > ? : * | \\`')
    }
}