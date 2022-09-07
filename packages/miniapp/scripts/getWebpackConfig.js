const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.config')
const AuthingMoveWebpackPlugin = require('@authing/authingmove-webpack-plugin')
const { resolve } = require('./utils')

module.exports = function getWebpackConfig (options) {
  const {
    __authing_move_src_mode__, 
    __authing_move_mode__, 
    compilerMode 
  } = options
  const entry = resolve('src', 'index.ts')
  const output = {
    filename: `bundle-${__authing_move_mode__.toLowerCase()}.js`,
    path: resolve('dist')
  }
  const plugins = [
    new webpack.DefinePlugin({
      __authing_move_src_mode__: JSON.stringify(__authing_move_src_mode__),
      __authing_move_mode__: JSON.stringify(__authing_move_mode__)
    }),
    new AuthingMoveWebpackPlugin({
      srcMode: __authing_move_src_mode__,
      mode: __authing_move_mode__
    })
  ]

  return merge({}, webpackBaseConfig, {
    mode: compilerMode,
    entry,
    output,
    plugins
  })
}
