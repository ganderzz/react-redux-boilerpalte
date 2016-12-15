var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    context: path.resolve("./"),
    resolve: {
        root: [
            path.resolve("./src")
        ],
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
              presets: ["es2015", "react"]
            }
          }
        ]
    },
    noParse: [
        path.resolve("./node_modules")
    ],
};