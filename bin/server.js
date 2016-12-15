/* Node server used to develop the frontend for the Quoting tool
 * Only run this server in *development*
 *
 * Command: npm start
 */
(function() {
    "use strict";

    /* Imports */
    const express   = require("express");
    const open      = require("open");
    const path      = require("path");
    const colors    = require("colors");

    const app  = express();

    const PORT = process.env.PORT || 3000;

    // Cookies will not be set in Chrome under localhost, so here we have to use 127.0.0.1
    // For some reason Chrome will assign cookies on the IP address but not localhost
    const LOCATION = `http://127.0.0.1:${PORT}`;

    // Bundle contains { dev: developmentConfiguration, hot: hotReloadConfiguration}
    const bundle = require("./bundle.js")();

    // Attach middlewares
    // This will intersect all requests to /build and route
    // it to our in-memory webpack build
    app.use(bundle.dev);
    app.use(bundle.hot);

    // Route all paths to index (Single Page App)
    app.get("/*" , function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    // Serve app on port
    const server = app.listen(PORT, function() {
        // Open app in the default browser
        open(LOCATION);

        // Give feedback in terminal
        console.log("Running at: " + LOCATION);
        console.log("==================================");
    });

    function closeServer() {
        console.log("Bye");
        server.close(function() {
            process.exit(0); // Exit Node
        });  // Close Express server
    }

    process.on("SIGTERM", closeServer);
    process.on("SIGINT", closeServer);
    process.on("exit", closeServer);
    process.on("SIGHUP", closeServer);
})();
