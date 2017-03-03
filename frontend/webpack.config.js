var path = require('path');
var webpack = require('webpack');
     
 module.exports = {
     entry: './react/app.jsx',
     output: {
         path: path.resolve(__dirname, './react/'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.jsx$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             },
             {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
             }
         ]
     },
     stats: {
         colors: true
     },
     devServer: {
         proxy: {
             '/api/**': {
                 target: 'http://localhost:8000/',
                 secure: false
             }
         }
     },
     devtool: 'source-map'
 };
