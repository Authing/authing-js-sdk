const path = require('path')
const fs = require('fs-extra')
const rm = require('rimraf')

const resolve = (dir, file = '') =>{
  return path.resolve(__dirname, '../', dir, file)
}

const platforms = ['taro', 'uniapp', 'wx']

readyGo()

function readyGo () {
  platforms.forEach(platform => {
    copyFiles(platform)
  })
}

function copyFiles (platform) {
  rm.sync(resolve(`packages/miniprogram-${platform}/dist`))

  // copy bundle
  fs.copySync(
    resolve(`packages/miniprogram/dist/bundle-${platform}.js`),
    resolve(`packages/miniprogram-${platform}/dist/bundle-${platform}.js`),
  )

  // copy typings
  fs.copySync(
    resolve('packages/miniprogram/dist/typings'),
    resolve(`packages/miniprogram-${platform}/dist/typings`)
  )
}
