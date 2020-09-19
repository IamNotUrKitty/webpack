const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin  = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ['@babel/env', { modules : false}]
          ]
        }
      },
      sideEffects: false
    }]
  },
  mode: "production",
  devtool: false,
  entry: {
    main:"./src/index.js",
  },
  optimization: {
    usedExports: true,
    sideEffects: false,
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: { chunks: "all" }
  },
  output: {
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates", "index.html")
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "report.html",
      defaultSizes: "parsed",
      logLevel: "silent",
    })
  ]
};