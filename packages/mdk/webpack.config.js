const path = require("path")
const TPWP = require('tsconfig-paths-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const DBWP = require('declaration-bundler-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mdk.js',
        library: {
            type: 'umd',
            name: 'mdkjs',
        },
        globalObject: 'this',
    },
    externals: {
        'mdk-nbt': "mdk-nbt",
    },
    resolve: {
        extensions: ['.ts'],
        plugins: [
            new TPWP({
                configFile: './tsconfig.json'
            })
        ],
    },
    devtool: 'source-map',
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(false),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    }
}