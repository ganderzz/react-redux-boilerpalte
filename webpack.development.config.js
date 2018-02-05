var webpack = require("./webpack.config");
var path = require("path");

var newOptions = {
    devServer: {
        publicPath: "/",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        port: 3000,
        open: true,
        openPage: "",
        compress: true,
        allowedHosts: ["*"]
    }
};

module.exports = Object.assign({}, webpack, newOptions);