const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",
    target: "web",
    devtool: 'inline-source-map',
    entry: "./src/index.ts",
    devServer: {
        contentBase: './dist',
        // hot: true,
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/, 
                    to: 'index.html'
                }
            ]
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                    loader: 'minify-lit-html-loader',
                    },
                    {
                    loader: 'ts-loader'
                    },
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin({
            sourceMap: true,
            extractComments: true,
        }),
    ],
}