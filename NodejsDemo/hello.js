//Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

//exports.world = function () {
//    console.log('Hello World');
//}
//把一个对象封装到模块中
function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log('Hello' + name);
    };
}
module.exports = Hello;