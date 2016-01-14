var Webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/js/entry.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};