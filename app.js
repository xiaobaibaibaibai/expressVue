const express = require("express");
const Router = require("./router");

var app = express();

var config = {};
config.port = 3000;

Router.init(app, config);

app.listen(config.port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server listening on port ${config.port}`);
});