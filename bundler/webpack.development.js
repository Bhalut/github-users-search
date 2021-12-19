const path = require("path");
const { merge } = require("webpack-merge");
const portFinderSync = require("portfinder-sync");
const commonConfiguration = require("./webpack.common.js");

module.exports = merge(commonConfiguration, {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: portFinderSync.getPort(8080),
    historyApiFallback: true,
    allowedHosts: "auto",
    host: "local-ipv4",
    compress: true,
    open: true,
    hot: true,
    client: {
      overlay: true,
      logging: "info"
    }
  }
});
