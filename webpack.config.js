var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./index.jsx",
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "main.js"
    },
    context: path.resolve("./src"),
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
          {
            test: /.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "react"]
            }
          }
        ]
    }
};