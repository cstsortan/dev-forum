const path = require('path');

module.exports = {
    mode: "development",
    target: "web",
    devtool: 'inline-source-map',
    entry: "./src/index.ts",
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
}