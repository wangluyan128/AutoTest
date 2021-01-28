//Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
//
// 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
var fs = require('fs');

//异步读取
fs.readFile('input1.txt',function (err,data) {
    if (err){
        return console.error(err);
    }
    console.log("异步读取："+data.toString());
});
//同步读取
var data = fs.readFileSync('input1.txt');
console.log('同步读取：' + data.toString());
console.log('程序执行完毕。');

//打开文件 fs.open(path, flags[, mode], callback)
var fs  = require('fs');
//异步打开文件
console.log('准备打开文件！');
fs.open('input.txt','r+',function (err,fd) {
    if (err){
        return console.error(err);
    }
    console.log('文件打开成功！');
})

//获取文件信息 fs.stat(path, callback)
//stats.isFile()	如果是文件返回 true，否则返回 false。
// stats.isDirectory()	如果是目录返回 true，否则返回 false。
// stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
// stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
// stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
// stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
// stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
var fs = require('fs');
fs.stat('input1.txt',function (err,stats) {
    console.log(stats.isFile());    //true
})

var fs = require('fs');
console.log('准备打开文件！');

fs.stat('input.txt',function (err,stats) {
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log('读取文件信息成功！');

    //检测文件类型
    console.log('是否为文件（isFile)?' +stats.isFile());
    console.log('是否为目录（isDirectory)?' + stats.isDirectory());
})

//写入文件 fs.writeFile(file, data[, options], callback)
var fs = require('fs');

console.log('准备写入文件');
fs.writeFile('input.txt','我是通过fs.writeFile写入的内容',function (err) {
    if(err){
        return console.error(err);
    }
    console.log('数据写入成功！');
    console.log('-----------我是分割线----------');
    console.log('读取写入的数据');
    fs.readFile('input.txt',function (err,data) {
        if (err){
            return console.error(err);
        }
        console.log('异步读取文件数据：'+data.toString());
    });
});

//读取文件  fs.read(fd, buffer, offset, length, position, callback)
//fd - 通过 fs.open() 方法返回的文件描述符。
//buffer - 数据写入的缓冲区。
//offset - 缓冲区写入的写入偏移量。
//length - 要从文件中读取的字节数。
//position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
//callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象
var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('准备打开已存在的文件！');
fs.open('input.txt','r+',function (err,fd) {
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功!');
    console.log('准备读取文件：');
    fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
        if(err){
            console.log(err);
        }
        console.log(bytes+ ' 字节被读取');

        //仅输出读取的字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
    })
})

//关闭文件 fs.close(fd, callback)

var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('准备打开文件！');
fs.open('input.txt','r+',function (err,fd) {
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功！');
    console.log('准备读取文件！');
    fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
        if(err){
            console.log(err);
        }
        //仅输出读取的字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }

        //关闭文件
        fs.close(fd,function (err) {
            if (err){
                console.log(err);
            }
            console.log('文件关闭成功');
        });
    });
});

//截取文件      fs.ftruncate(fd, len, callback)

var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('准备打开文件！');
fs.open('input.txt','r+',function (err,fd) {
    if (err){
        return console.error(err);
    }
    console.log('文件打开成功！');
    console.log('截取10字节的文件内容，超出部分将被去除。');

    //截取文件
    fs.ftruncate(fd,10,function (err) {
        if (err){
            console.log(err);
        }
        console.log('文件截取成功。');
        console.log('读取相同的文件');
        fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
            if(err){
                console.log(err);
            }
            //仅输出读取的字节
            if(bytes>0){
                console.log(buf.slice(0,bytes).toString());
            }
            //关闭文件
            fs.close(fd,function (err) {
                if(err){
                    console.log(err);
                }
                console.log('文件关闭成功！');
            });
        });
    });
});

//删除文件 fs.unlink(path, callback)

var fs = require('fs');
console.log('准备删除文件！');
fs.unlink('input.txt',function (err) {
    if (err){
        return console.error(err);
    }
    console.log('文件删除成功！');
});

//创建目录 fs.mkdir(path[, options], callback)
//可以添加 recursive: true 参数，不管创建的目录 /tmp 和 /tmp/a 是否存在：
//path - 文件路径。
//
// options 参数可以是：
//
// recursive - 是否以递归的方式创建目录，默认为 false。
// mode - 设置目录权限，默认为 0777。
// callback - 回调函数，没有参数。
var fs = require('fs');
//tmp目录必须存在
console.log('创建目录 E:/work/AutoTest/NodejsDemo/tmp/');
fs.mkdir('E:/work/AutoTest/NodejsDemo/tmp/',function (err) {
    if (err){
        return console.error(err);
    }
    console.log("目录创建成功。");
});

fs.mkdir('E:/work/AutoTest/NodejsDemo/tmp/',{recursive:true},(err) => {
    if(err) throw err;
});

//读取目录 fs.readdir(path, callback)
var fs=require('fs');
console.log('查看/tmp目录');
fs.readdir('E:/work/AutoTest/NodejsDemo/tmp/',function (err,files) {
    if (err){
        return console.error(err);
    }
    files.forEach(function (file) {
        console.log(file);
    });
});

//删除目录  fs.rmdir(path, callback)
var fs = require('fs');
//执行前创建一个空的/tmp目录
console.log('准备删除目录/tmp');
fs.rmdir('E:/work/AutoTest/NodejsDemo/tmp/',function (err) {
    if (err){
        return console.error(err);
    }
    console.log('读取/tmp目录');
    fs.readdir('E:/work/AutoTest/NodejsDemo/tmp/',function (err,files) {
        if(err){
            return console.error(err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
});