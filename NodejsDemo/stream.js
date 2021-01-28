/*
* Node.js，Stream 有四种流类型：

Readable - 可读操作。

Writable - 可写操作。

Duplex - 可读可写操作.

Transform - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

data - 当有数据可读时触发。

end - 没有更多的数据可读时触发。

error - 在接收和写入过程中发生错误时触发。

finish - 所有数据已被写入到底层系统时触发。
* */

var fs = require("fs");
var data = '';
//从流中读取数据
//创建可读流
var readerStream = fs.createReadStream('input1.txt');

//设置编码为utf8.
readerStream.setEncoding('UTF-8');

//处理流事件 --》data,end,and error
readerStream.on('data',function (chunk) {
    data+=chunk;
});

readerStream.on('end',function () {
    console.log(data);
});

readerStream.on('error',function (err) {
    console.log(err.stack)
});

console.log('程序执行完毕');

//写入流
var fs = require('fs');
var data = '菜鸟教程官网地址：www.runoob.com';

//创建一个可以写入的流，写入文件output.txt中
var writerStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writerStream.write(data,'UTF-8');

//标记文件末尾
writerStream.end();

//处理流事件 --》finish/error
writerStream.on('finish',function () {
    console.log('写入完成。');
});

writerStream.on('error',function (err) {
    console.log(err.stack);
});

console.log('程序执行完毕');

var fs = require("fs");
//管道流
//创建一个可读流
var readerStream = fs.createReadStream('input1.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容，并将内容写入到output.txt文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");

//链式流
var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成");


var fs = require("fs");
var zlib = require("zlib");

//解压input.txt.gz文件为input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));
console.log("文件解压完成。");