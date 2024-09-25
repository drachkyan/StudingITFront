const path = require('path');
const {CleanWebpack, CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpack = require('html-webpack-plugin')
module.exports = {
    mode : "development",
    entry: ["@babel/polyfill","./src/index.tsx"],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[fullhash].js",
    },
    devServer: {
        port:8080,

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HTMLWebpack({template:"./src/index.html"}),
        new CleanWebpackPlugin(),
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