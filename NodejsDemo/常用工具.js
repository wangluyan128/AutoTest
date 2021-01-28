/*
const util = require('util');
//util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。

async function fn() {
    return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err,ret)=>{
        if (err) throw err;
        console.log(ret);
    }

)

//null 在回调函数中作为一个参数有其特殊的意义，如果回调函数的首个参数为 Promise 拒绝的原因且带有返回值，且值可以转换成布尔值 false，这个值会被封装在 Error 对象里，可以通过属性 reason 获取。
function fn() {
    return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err,ret)=>{
    //当Promise被以‘null'拒绝时，它被包装为Error并且原始值存储在'reason’中。
    err && err.hasOwnProperty('reason') && err.reason ===null; //true
});
*/
//util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
//JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
//Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
    console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

//util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function () {
    return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

//util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回 true，否则返回 false。

var util = require('util');
util.isArray([])
//true
util.isArray(new Array);
//true
util.isArray({})
//false

//util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

var util = require('util');
util.isRegExp(/some regexp/);
//true
util.isRegExp(new RegExp('another regexp'))
//true
util.isRegExp({})
//false

//util.isDate(object)
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。
var util = require('util');
util.isDate(new Date())
//true
util.isDate(Date())
//false(without 'new' returns a String)
util.isDate({})
//false
