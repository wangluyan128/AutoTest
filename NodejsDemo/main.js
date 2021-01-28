var fs = require("fs");
var data = fs.readFileSync('input1.txt');

console.log(data.toString());
console.log("程序执行结束！");

var fs = require("fs");
fs.readFile('input.txt',function(err,data){
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log("程序执行结束！");

//使用下划线(_)获取上一个表达式的运算结果  var sum = _

//引入events模块
var events = require("events")
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected() {
    console.log("连接成功");

    //触发data_received事件
    eventEmitter.emit('data_recevied');
}
//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);
//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function (){
   console.log("数据接受成功。");
});
//触发connection事件
eventEmitter.emit('connection');
console.log("程序执行完毕。");
