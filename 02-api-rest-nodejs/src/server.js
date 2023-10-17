"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
// http://localhost:3333/hello
app.get('/hello', function () {
    return 'Hello world';
});
app.listen({
    port: 3333
}).then(function () {
    console.log('HTTP Server Running!');
});
