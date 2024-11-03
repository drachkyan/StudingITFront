const path = require('path');
const {CleanWebpack, CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpack = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: ["@babel/polyfill","./src/index.tsx"],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[fullhash].js",
    },
    devServer: {
        port:8080,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HTMLWebpack({template:"./src/index.html"}),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),

    ],
    module: {
        rules:[
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.m?js|jsx$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.(css|less)$/ ,
            use:["style-loader","css-loader","less-loader"]
        },
        {
            test: /\.(jpg|png|jpeg)$/,
            use: ["file-loader"]
        }
    ]
    }
}