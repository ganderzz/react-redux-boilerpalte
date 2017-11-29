var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
    entry: [
        "babel-polyfill",
        path.resolve("src", "index.tsx"),
    ],
    output: {
        path: path.resolve("dist"),
        publicPath: "./",
        filename: "bundle.js"
    },
    context: path.resolve(__dirname),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
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
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("public", "index.html"),
            inject: true
        }),
    ],
};
