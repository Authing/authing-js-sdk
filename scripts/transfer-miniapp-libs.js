const path = require('path')
const fs = require('fs-extra')
const rm = require('rimraf')

const resolve = (dir, file = '') =>{
  return path.resolve(__dirname, '../', dir, file)
}

const platforms = ['taro', 'uni', 'wx', 'tt']

readyGo()

function readyGo () {
  platforms.forEach(platform => {
    copyFiles(platform)
  })
}

function copyFiles (platform) {
  const _platform = platform === 'uni' ? 'uniapp' : platform

  rm.sync(resolve(`packages/miniapp-${_platform}/dist`))

  // copy bundle
  fs.copySync(
    resolve(`packages/miniapp/dist/bundle-${platform}.js`),
    resolve(`packages/miniapp-${_platform}/dist/bundle-${_platform}.js`),
  )

  // copy typings
  fs.copySync(
    resolve('packages/miniapp/dist/typings'),
    resolve(`packages/miniapp-${_platform}/dist/typings`)
  )
}
