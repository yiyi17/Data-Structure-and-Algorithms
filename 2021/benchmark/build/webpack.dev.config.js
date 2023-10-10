/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 17:36:20
 * @LastEditTime: 2019-08-16 14:36:07
 * @LastEditors: Please set LastEditors
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        app: [path.join(__dirname, '../src/index.js')],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name]-[hash].js',
        publicPath: '/'
    },
    devtool: 'eval',
    // devServer: {
    //     open:true,
    //   },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            cache: false,
            inject:'head',
            template: path.join(__dirname, '../index.html')
        }),
        new webpack.HotModuleReplacementPlugin({
            // multiStep:true
        })
    ]
}
