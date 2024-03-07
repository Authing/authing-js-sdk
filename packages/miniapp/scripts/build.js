// all modes:
// 'wx', 'ali', 'baidu', 'qq', 'tt', 'jd', 'ks', 'qa_webview', 'qa_ux', 'Mpx', 'Taro', 'uni'

/**
 * if has no "modes" param, default build all modes
 */

// development mode:
// npm run dev modes=wx,ali,.....

// production mode:
// npm run prod modes=wx,ali,baidu,tt......

const rm = require('rimraf')
const chalk = require('chalk')
const fs = require('fs-extra')

const webpack = require('webpack')

const { parseArgv, resolve } = require('./utils')
const { platforms } = require('./config')
const getWebpackConfig = require('./getWebpackConfig')

const { watch = false, modes = platforms } = parseArgv()

const webpackConfigs = modes.reduce((configs, mode) => {
  const options = {
    __authing_move_src_mode__: 'wx',
    __authing_move_mode__: mode,
    compilerMode: watch ? 'none': 'production'
  }
  return configs.concat(getWebpackConfig(options))
}, [])

try {
  rm.sync(resolve('dist'))
} catch (e) {
  console.log(chalk.red('\n\n Failed to delete dist directory, please operate manually \n\n'))
}

readyGo()

function readyGo () {
  const ret = webpackConfigs.reduce((ret, config) => {
    return ret.concat(
      Promise.resolve().then(() => build(config))
    )
  }, [])
  return Promise.all(ret)
}

function copyFiles(platform) {
  const _platform = platform === 'uni' ? 'uniapp' : platform

  rm.sync(resolve(`../miniapp-${_platform}/dist`))

  // copy bundle
  fs.copySync(
    resolve(`../miniapp/dist/bundle-${platform}.js`),
    resolve(`../miniapp-${_platform}/dist/bundle-${_platform}.js`)
  )

  // copy typings
  fs.copySync(
    resolve('../miniapp/dist/typings'),
    resolve(`../miniapp-${_platform}/dist/typings`)
  )
}

function build(config) {
  if (watch) {
    webpack(config).watch(undefined, (error, stats) => {
      const mode = config.output.filename.match(/bundle-(.*).js/)[1]
      copyFiles(mode)
      callback(error, stats)
    })
  } else {
    webpack(config, callback)
  }
}


function callback (error, stats) {
  if (error) {
    process.exitCode = 1
    return console.log(chalk.red(error))
  }

  if (Array.isArray(stats.stats)) {
    stats.stats.forEach(item => {
      console.log(chalk.green('build: '))
      process.stdout.write(item.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
        entrypoints: false
      }) + '\n\n')
    })
  } else {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      entrypoints: false
    }) + '\n\n')
  }

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
  } else if (watch) {
    console.log(chalk.cyan(`  Build complete at ${new Date()}.\n  Still watching...\n`))
  } else {
    console.log(chalk.cyan('  Build complete.\n'))
  }
}
