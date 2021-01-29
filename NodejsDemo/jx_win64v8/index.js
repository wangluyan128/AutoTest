var server = require("./路由");
var router = require("./router");

server.start(router.route);