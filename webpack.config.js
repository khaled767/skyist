const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devServer: {
    static: "./dist",
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
    {
  test: /\.js$/,
  include: path.resolve(__dirname, "src"),
  type: "javascript/esm",
  use: {
    loader: "babel-loader",
    options: {
    presets: [["@babel/preset-env", { targets: "defaults" }]],
      },
    },
  },
    { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    { test: /\.(png|jpg|jpeg|svg|webp)$/i, type: "asset/resource" },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};