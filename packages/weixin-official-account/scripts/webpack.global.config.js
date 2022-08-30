const path = require('path')

function resolve (dir, file = '') {
  return path.resolve(__dirname, '../', dir, file)
}

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: resolve('src/index.ts'),
  output: {
    filename: 'weixin-official-account.min.js',
    path: resolve('dist/global'),
    library: {
      name: 'AuthingFactory',
      type: 'global'
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
