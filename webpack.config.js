module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'authing-js-sdk.js'
    },
  	module: {
    	rules: [
      		{
        		test: /\.json$/,
        		use: 'json-loader'
      		}
    	]
  	}
}