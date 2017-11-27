var webpack = require("./webpack.config");
var path = require("path");

var newOptions = {
    devServer: {
        publicPath: "/dist/",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        port: 3000,
        open: true,
        openPage: "dist",
        compress: true,
        allowedHosts: ["*"]
    }
};

module.exports = Object.assign({}, webpack, newOptions);