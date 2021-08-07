module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**.test.ts',
    ],
    globals: {
        "__DEV__": true
    },
    moduleNameMapper: {
        "@dev/(.*)": "<rootDir>/src/__dev__/$1",
        "@plugins/(.*)": "<rootDir>/src/plugins/$1",
        "@core/(.*)": "<rootDir>/src/core/$1",
        "@utils/(.*)": "<rootDir>/src/utils/$1",
        "@tools/(.*)": "<rootDir>/src/tools/$1",
        "@lib/(.*)": "<rootDir>/src/lib/$1",
        "@model/(.*)": "<rootDir>/src/model/$1",
        "@typings/(.*)": "<rootDir>/src/typings/$1",
        "@/(.*)": "<rootDir>/src/$1"
    },
};