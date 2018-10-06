const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index-bundle.js",
    publicPath: "/"
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({ template: "./app/index.html" })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true
  }
};
