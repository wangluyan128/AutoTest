//输出全局变量__filename的值
console.log(__filename);

//输出全局变量__dirname的值
console.log(__dirname);


//输出到终端
process.stdout.write("Hello World!"+"\n");
//通过参数读取
process.argv.forEach(function (val,index,array) {
    console.log(index +': '+val);
});
//获取执行路径
console.log(process.execPath);
//平台信息
console.log(process.platform);

//输出当前目录
console.log('当前目录：'+process.cwd());
//输出当前版本
console.log('当前版本：'+process.version);
//输出内存使用情况
console.log(process.memoryUsage());

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
//
// 返回一个代表定时器的句柄值。

function printHello() {
    console.log("Hello,World!");
}
//两秒后执行以上函数
setTimeout(printHello,2000);

//clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
function printHello() {
    console.log("Hello,World!");
}
//两秒以上执行以上函数
var t = setTimeout(printHello,2000);
//清除定时器
clearTimeout(t);

//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//
// 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
//
// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

function printHello() {
    console.log("Hello,World!");
}
//两秒后执行以上函数
//setInterval(printHello,2000);

console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb',1991);

console.trace();

console.info('程序开始执行：');
var counter = 10;
console.log('计数：%d',counter);

console.time('获取数据');
//执行一些代码
console.timeEnd('获取数据');

console.info('执行程序完毕。');

process.on('exit',function (code) {
    //以下代码永远不会执行
    setTimeout(function () {
        console.log('该代码不会执行');
    },0);

    console.log('退出码为：',code);
});
console.log('程序执行结束');

