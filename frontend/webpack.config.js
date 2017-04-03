var path = require('path');
var webpack = require('webpack');
     
 module.exports = {
     entry: './src/App.js',
     output: {
         path: path.resolve(__dirname, './react/'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             },
             {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
             },
             {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000'
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
