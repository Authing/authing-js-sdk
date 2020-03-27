const path = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");
const webConfig = {
  entry: "./src/index.js",
  mode: "production",
  target: "web",
  output: {
    filename: "authing-js-sdk-browser.min.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "Authing"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: "commonjs",
                targets: {
                  chrome: "58",
                  ie: "11"
                },
                useBuiltIns: "usage",
                corejs: 3
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_TARGET": JSON.stringify("web"),
      "process.env.VERSION": JSON.stringify(packageJson.version)
    })
  ]
};
const webDevConfig = {
  entry: "./src/index.js",
  mode: "development",
  target: "web",
  output: {
    filename: "authing-js-sdk-browser.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "Authing"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: "commonjs",
                targets: {
                  chrome: "58",
                  ie: "11"
                },
                useBuiltIns: "usage",
                corejs: 3
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_TARGET": JSON.stringify("web"),
      "process.env.VERSION": JSON.stringify(packageJson.version)
    })
  ]
};
const nodeDevConfig = {
  entry: "./src/index.js",
  mode: "development",
  target: "node",
  output: {
    filename: "authing-js-sdk-node.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
    library: "Authing"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: "commonjs",
                targets: {
                  node: "8"
                },
                useBuiltIns: "usage",
                corejs: 3
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_TARGET": JSON.stringify("node"),
      "process.env.VERSION": JSON.stringify(packageJson.version)
    })
  ]
};
const nodeConfig = {
  entry: "./src/index.js",
  mode: "production",
  target: "node",
  output: {
    filename: "authing-js-sdk-node.min.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
    library: "Authing"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: "commonjs",
                targets: {
                  node: "8"
                },
                useBuiltIns: "usage",
                corejs: 3
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_TARGET": JSON.stringify("node"),
      "process.env.VERSION": JSON.stringify(packageJson.version)
    })
  ]
};
module.exports = [webConfig, webDevConfig, nodeConfig, nodeDevConfig];
