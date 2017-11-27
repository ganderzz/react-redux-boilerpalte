var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
    entry: [
        "babel-polyfill",
        "./index.tsx",
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "./",
        filename: "main.js"
    },
    context: path.resolve("./src"),
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "public", "index.html"),
            inject: true
        }),
    ],
};
