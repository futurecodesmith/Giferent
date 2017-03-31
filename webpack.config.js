const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},

            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},

            { test: /(.css|\.scss)$/, loaders: ['style', 'css']},

            { test: /\.html$/, loader: 'html-loader', exclude: /node_modules/}
        ]
    }
}