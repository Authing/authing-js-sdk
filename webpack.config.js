const path = require('path');
const webpack = require('webpack');

const resolve = function(...args) {
  return path.resolve(__dirname, ...args);
};

module.exports = {
  mode: 'production',
  target: 'web',
  entry: resolve('./src/index.ts'),
  output: {
    path: resolve('./build/browser'),
    filename: 'index.min.js',
    library: 'Authing',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
      // process: require.resolve('process')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]
};
