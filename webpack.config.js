const path = require('path');
const webpack = require('webpack');
const webConfig = {
  entry: './src/index.js',
  mode: 'production',
  target: 'web',
  output: {
    filename: 'authing-js-sdk-browser.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BUILD_TARGET': JSON.stringify('web')
    })
  ]
};
const nodeConfig = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: 'authing-js-sdk-node.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BUILD_TARGET': JSON.stringify('node')
    })
  ]
};
module.exports = [webConfig, nodeConfig];
