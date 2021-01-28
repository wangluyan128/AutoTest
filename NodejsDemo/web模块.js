// http 模块，http 模块主要用于搭建 HTTP 服务端和客户端，使用 HTTP 服务器或客户端功能必须调用 http 模块
//var http = require('http');

var http = require('http');
var fs = require('fs');
var url = require('url');

var server=http.createServer();

//创建服务器
http.createServer(function (request,response) {
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    //输出请求的文件名
    console.log('Request for ' + pathname + ' received.');

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function (err,data) {
        if (err) {
            console.log(err);
            //HTTP状态码：404：NOT FOUND
            //Content Type:text/html
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            //HTTP状态码：200:OK
            //Content Type:text/html
            response.writeHead(200,{'Content-Type':'text/html'});

            //响应文件内容
            response.write(data.toString());
            }
        // 发送响应数据
        response.end();
    });
}).listen(8800);

//第一条时URL地址为用户输入的客户端请求的目标URL地址,"/"代表用户的目标url地址为web应用程序的根目录.
// 第二个目标URL地址问浏览器为页面在收藏夹中的显示图标.默认为favicon.ico.而自动发出的请求的目标URL地址.
server.on('request',function (req,res) {
    if(req.url!=='/favicon.ico')
        console.log(req.url);
    res.end();
})

//控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8800');