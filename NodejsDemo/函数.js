function say(word) {
    console.log(word);
}

function excute(someFunction,value) {
    someFunction(value);
}

execute(say,"Hello");

//匿名函数
function excute(someFunction,value) {
    someFunction(value);
}
execute(function (word) {
    console.log(word)
},"Hello");

//函数传递是如何让HTTP服务器工作的
var http = require("http");
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

//or

var http = require('http');
function onRequest(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}
http.createServer(onRequest).listen(8888);