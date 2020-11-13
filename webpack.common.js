const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve('src/index.tsx'),
    },
    devtool: "source-map",
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].[contenthash:8].js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
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
                test: /\.tsx?$/,
                exclude: /(node_modules|\.webpack)/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true, importLoaders: 1 }
                    },
                    
                ]
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
        new CleanWebpackPlugin()
    ]
}
