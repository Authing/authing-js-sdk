const path = require('path');
const webpack = require('webpack');
const webConfig = {
  entry: './src/index.js',
  mode: 'production',
  target: 'web',
  output: {
    filename: 'authing-js-sdk-browser.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Authing'
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
const webDevConfig = {
  entry: './src/index.js',
  mode: 'development',
  target: 'web',
  output: {
    filename: 'authing-js-sdk-browser.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Authing'
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
const nodeDevConfig = {
  entry: './src/index.js',
  mode: 'development',
  target: 'node',
  output: {
    filename: 'authing-js-sdk-node.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Authing'
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
const nodeConfig = {
  entry: './src/index.js',
  mode: 'production',
  target: 'node',
  output: {
    filename: 'authing-js-sdk-node.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Authing'
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
module.exports = [webConfig, webDevConfig, nodeConfig, nodeDevConfig];
