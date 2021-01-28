/*
* Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
Buffer.allocUnsafeSlow(size)
Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
* buf.write(string[, offset[, length]][, encoding])
* buf.toString([encoding[, start[, end]]])
* buf.toJSON()
* Buffer.concat(list[, totalLength])
* buf.compare(otherBuffer);
* buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
* buf.slice([start[, end]])
* */

buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");
console.log("写入字节数："+len);

buf = Buffer.alloc(26);
for (var i = 0;i<26;i++){
    buf[i]=i+97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf-8',0,5));
console.log(buf.toString(undefined,0,5));

buf = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf);

//输出：{"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json,(key,value)=>{
    return value && value.type == 'Buffer'?
        Buffer.from(value.data):
        value;
});

//输出：<Buffer 01 02 03 04 05>
console.log(copy);

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容：" + buffer3.toString());


var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if (result<0){
    console.log(buffer1+"在"+buffer2+"之前");
}else if(result==0){
    console.log(buffer1+"与"+buffer2+"相同");
}else{
    console.log(buffer1+"在"+buffer2+"之后");
}

var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNDOB');

//将buf2插入到buf1指定位置上
buf2.copy(buf1,2);
console.log(buf1.toString());

var buffer1 = Buffer.from('runoob');
//剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log('buffer2 content:' + buffer2.toString())

var buffer = Buffer.from('www.runoob.com');
//缓冲区长度
console.log('buffer length:' + buffer.length);

