const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlRules = {
  test: /\.(html)$/,
  use: ["html-loader"]
};

const javascriptRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../public/index.html"),
    favicon: path.resolve(__dirname, "../public/favicon.ico"),
    minify: true
  })
];

const rules = [htmlRules, javascriptRules];

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[contenthash].js",
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "source-map",
  plugins,
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: { rules },
  stats: {
    preset: "minimal",
    moduleTrace: true,
    errorDetails: true
  }
};
