const path = require('path')
const fs = require('fs-extra')
const rm = require('rimraf')

const resolve = (dir, file = '') =>{
  return path.resolve(__dirname, '../', dir, file)
}

const platforms = ['taro', 'uni', 'wx']

readyGo()

function readyGo () {
  platforms.forEach(platform => {
    copyFiles(platform)
  })
}

function copyFiles (platform) {
  const _platform = platform === 'uni' ? 'uniapp' : platform

  rm.sync(resolve(`packages/miniprogram-${_platform}/dist`))

  // copy bundle
  fs.copySync(
    resolve(`packages/miniprogram/dist/bundle-${platform}.js`),
    resolve(`packages/miniprogram-${_platform}/dist/bundle-${_platform}.js`),
  )

  // copy typings
  fs.copySync(
    resolve('packages/miniprogram/dist/typings'),
    resolve(`packages/miniprogram-${_platform}/dist/typings`)
  )
}
