const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const nodeConfig = {
	target: 'node',
	mode: 'development',
	entry: './index.js',
	output: {
		libraryTarget: 'umd',
		path: __dirname + '/dist',
		filename: 'authing-js-sdk.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ["env", "stage-0"] // env --> es6, stage-0 --> es7, react --> react
				}
			},
			exclude: /node_modules/
		}]
	}
};

const webConfig = {
	target: 'web',
	mode: 'development',
	entry: './index.js',
	output: {
		libraryTarget: 'umd',
		path: __dirname + '/dist',
		filename: 'authing-js-sdk-browser.js'
	},
	module: {
		rules: [{
				test: /\.json$/,
				use: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["env", "stage-0"] // env --> es6, stage-0 --> es7, react --> react
					}
				},
				exclude: /node_modules/
			}
		]
	}
};

const webMinConfig = {
	target: 'web',
	mode: 'production',
	entry: './index.js',
	output: {
		libraryTarget: 'umd',
		path: __dirname + '/dist',
		filename: 'authing-js-sdk-browser.min.js'
	},
	module: {
		rules: [{
				test: /\.json$/,
				use: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["env", "stage-0"] // env --> es6, stage-0 --> es7, react --> react
					}
				},
				exclude: /node_modules/
			}
		]
	},
	optimization: {
		minimizer: [
			// new BundleAnalyzerPlugin(), // 打包后可查看各种包大小
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						// 在UglifyJs删除没有用到的代码时不输出警告
						warnings: false,
						// 删除所有的 `console` 语句，可以兼容ie浏览器
						drop_console: true,
						// 内嵌定义了但是只用到一次的变量
						collapse_vars: true,
						// 提取出出现多次但是没有定义成变量去引用的静态值
						reduce_vars: true,
					},
					output: {
						// 最紧凑的输出
						beautify: false,
						// 删除所有的注释
						comments: false,
					}
				}

			})
		]
	}
};

module.exports = [nodeConfig, webConfig, webMinConfig];