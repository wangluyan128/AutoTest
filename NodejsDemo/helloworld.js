var http = require("http")
//npm install express          # 本地安装
//npm install express -g   # 全局安装
//将安装包放在 /usr/local 下或者你 node 的安装目录
//可以通过 require() 来引入本地安装的包
//如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link。
//卸载npm uninstall express
//查看npm ls
//发布模块npm publish
//语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号
//npm install -g cnpm --registry=https://registry.npm.taobao.org
//使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world");
    response.end();

}).listen(8888)
console.log("nodejs start listen 8888 port");