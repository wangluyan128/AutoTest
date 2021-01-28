//Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
// Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。
//EventEmitter 提供了多个属性，如 on(event, listener) 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件
/*
* 方法
序号	方法 & 描述
1	addListener(event, listener)
为指定事件添加一个监听器到监听器数组的尾部。
2	on(event, listener)
为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
server.on('connection', function (stream) {
  console.log('someone connected!');
});
3	once(event, listener)
为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
server.once('connection', function (stream) {
  console.log('Ah, we have our first user!');
});
4	removeListener(event, listener)
移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

它接受两个参数，第一个是事件名称，第二个是回调函数名称。

var callback = function(stream) {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
5	removeAllListeners([event])
移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
6	setMaxListeners(n)
默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
7	listeners(event)
返回指定事件的监听器数组。
8	emit(event, [arg1], [arg2], [...])
按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
类方法
序号	方法 & 描述
1	listenerCount(emitter, event)
返回指定事件的监听器数量。
events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
events.emitter.listenerCount(eventName) //推荐
事件
序号	事件 & 描述
1	newListener
event - 字符串，事件名称

listener - 处理事件函数

该事件在添加新监听器时被触发。

2	removeListener
event - 字符串，事件名称

listener - 处理事件函数

从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
* */
//EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
//
// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
//
// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃

//引入events模块
//var events = require('events');
//创建eventEmitter对象
//var eventEmitter = new events.EventEmitter();

var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();
event.on('some_event',function () {
    console.log('some_event事件');
})
setTimeout(function () {
    event.emit('some_event');
},1000);

var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
});
emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
})
emitter.emit('someEvent','arg1参数','arg2参数');

var events = require('events');
var eventEmitter = new events.EventEmitter();
//监听器#1
var listener1 = function listener1() {
    console.log('监听器listener1执行');
}
//监听器 #2
var listener2 = function listener2() {
    console.log('监听器listener2执行');
}
//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);
//绑定connection事件，处理函数为listener2
eventEmitter.addListener('connection',listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听器监听连接事件。");

//处理conection事件
eventEmitter.emit('connection');

//移除监绑定的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1不再受监听');

//触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听器监听连接事件。");

console.log("程序执行完毕。");


var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');