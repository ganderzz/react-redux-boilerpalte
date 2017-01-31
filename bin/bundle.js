"Use Strict";

/* Imports */
const Webpack = require("webpack");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");

const webpackConfig = require("../webpack.development.config.js");

module.exports = function (serverLocation) {
    // Create a webpack instance with our development config
    const compiler = Webpack(webpackConfig);

    // Create a middleware that recompiles our build on page reload
    const dev = WebpackDevMiddleware(compiler, {
        publicPath: serverLocation + "/build/",

        // Configure hot replacement
        hot: true,
        inline: true,
        headers: { "Access-Control-Allow-Origin": "*" },

        // The rest is terminal configurations
        quiet: false,
        noInfo: true,
        lazy: true,
        watchOptions : {
            poll: true,
            aggregateTimeout: 500
        },
        stats: {
            colors: true
        },
        log: console.log
    });

    // Webpack hot-load middleware, this is needed for the server to get a recompile response
    const hot = WebpackHotMiddleware(compiler);

    return {
        hot: hot,
        dev: dev
    };
};