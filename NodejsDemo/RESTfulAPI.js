//表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful
//REST是设计风格而不是标准。REST通常基于使用HTTP，URI，和XML（标准通用标记语言下的一个子集）以及HTML（标准通用标记语言下的一个应用）这些现有的广泛流行的协议和标准。REST 通常使用 JSON 数据格式
// /创建 RESTful
//序号	URI	HTTP 方法	发送内容	结果
// 1	listUsers	GET	空	显示所有用户列表
// 2	addUser	POST	JSON 字符串	添加新用户
// 3	deleteUser	DELETE	JSON 字符串	删除用户
// 4	:id	GET	空	显示用户详细信息

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers',function (req,res) {
    fs.readFile(__dirname+"/"+"users.json","utf8",function (err,data) {
        console.log(data);
        res.end(data);
    });
})

//添加的新用户数据 http://127.0.0.1:8081/addUser
var user = {
    "user4":{
        "name":"mohit",
        "password":"password4",
        "profession":"teacher",
        "id":4
    }
}

app.get('/addUser',function (req,res) {
    //读取已存在的数据
    fs.readFile(__dirname + "/" + "users.json","utf8",function (err,data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
//显示用户详情    http://127.0.0.1:8081/2，
app.get('/:id',function (req,res) {
    //首先我们读取已存在的用户
    fs.readFile(__dirname +"/" +"users.json",'utf8',function (err,data) {
        data = JSON.parse(data);
        var user = data['user'+ req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    })
})

//删除用户 http://127.0.0.1:8081/deleteUser
var id = 2;
app.get('/deleteUser',function (req,res) {
    //First read existing user.
    fs.readFile(__dirname + '/' + 'users.json','utf8',function (err,data) {
        data = JSON.parse(data);
        delete data['user'+id];

        console.log(data);
        res.end(JSON.stringify(data));
    });
})
var server = app.listen(8800,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为http://%s:%s",host,port);
})



