exports.getArgsFromTerminal = arg => process.env[`npm_config_${arg}`]
