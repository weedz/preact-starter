const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve('src/index.js'),
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].[contentHash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|png)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(["dist"])
    ]
}
