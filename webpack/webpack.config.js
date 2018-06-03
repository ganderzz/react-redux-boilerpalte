const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");

module.exports = {
  entry: {
    vendor: ["react", "react-dom", "react-redux", "redux"],
    main: ["babel-polyfill", path.resolve(ROOT_DIR, "src", "index.tsx")],
  },
  output: {
    path: path.resolve("dist"),
    publicPath: "./",
    filename: "[name].bundle.js",
  },
  context: path.resolve(ROOT_DIR),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.(ts|tsx)$/,
        loader: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_DIR, "public", "index.html"),
      favicon: path.resolve(ROOT_DIR, "public", "favicon.ico"),
      inject: true,
    }),
  ],
};
