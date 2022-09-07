const path = require('path')

exports.parseArgv = function parseArgv () {
  return process.argv.slice(2).reduce((map, arg) => {
    const [key, value] = arg.replace(/-/img, '').split('=')
    map[key] = !value ? true : value.split(',')
    return map
  }, {})
}

exports.resolve = function resolve (dir, file = '') {
  return path.resolve(__dirname, '../', dir, file)
}

exports.getArgsFromTerminal = arg => process.env[`npm_config_${arg}`]
