/**
 * Created by wm.liu on 2018/2/7.
 */
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    }
};