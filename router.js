const path = require("path");
const express = require("express");
const expressVue = require("express-vue");
const glob = require("glob");

module.exports.init = (app, config) => {

    const router = express.Router();
    /*
    const vueOptions = {
        rootPath: path.join(__dirname, '../vueExpress'),
        vueVersion: "2.3.4",
        template: {
            html: {
                start: '<!DOCTYPE html><html>',
                end: '</html>'
            },
            body: {
                start: '<body>',
                end: '</body>'
            },
            template: {
                start: '<div id="app">',
                end: '</div>'
            }
        },
        head: {
            title: 'Hello this is a global title',
            scripts: [
                { src: 'https://example.com/script.js' },
            ],
            styles: [
                { style: '/assets/rendered/style.css' }
            ]
        },
        data: {
            foo: true,
            bar: 'yes',
            qux: {
                id: 123,
                baz: 'anything you wish, you can have any kind of object in the data object, it will be global and on every route'
            }
        }
    };
    */

    const vueOptions = {
        rootPath: path.join(__dirname, "../vueExpress"),
        head: {
            styles: [{ style: "assets/rendered/style.css" }],
        },
        data: {
            foo: true,
            bar: 'yes',
            qux: {
                id: 123,
                baz: 'anything you wish, you can have any kind of object in the data object, it will be global and on every route'
            }
        },
    };

    const expressVueMiddleware = expressVue.init(vueOptions);
    app.use(expressVueMiddleware);

    app.use("/", router);
    
    let controllers = glob.sync(config.root + "/routes/*.js");
    controllers.forEach(function(controller) {
        module.require(controller)(router);
    });

}