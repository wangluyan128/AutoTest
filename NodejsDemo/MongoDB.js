//MongoDB是一种文档导向数据库管理系统，由C++撰写而成。
// cnpm install mongodb

//创建数据库
var MongoClient =require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    console.log('数据库已创建！');
    db.close();
});

//创建集合
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';
MongoClient.connect(url,function (err,db) {
    if (err)throw err;
    console.log('数据库已创建');
    var dbase = db.db('runoob');
    dbase.createCollection('site',function (err,res) {
        if (err)throw err;
        console.log('创建集合！');
        db.close();
    });
});

//数据库操作（CURD）
//插入数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var myobj = {name:"菜鸟教程",url:'www.runoob'};
    dbo.collection('site').insertOne(myobj,function (err,res) {
        if (err)throw err;
        console.log('文档插入成功');
        db.close();
    });
});


//插入多条数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err)throw err;
    var dbo = db.db('runoob');
    var myobj = [
        {name:'菜鸟工具',url:'https://c.runoob.com',type:'cn'},
        {name:'Goolge',url:'https://www.goolge.com',type:'en'},
        {name: 'Facebook',url:'https//www.goolge.com',type:'en'}
    ];
    dbo.constructor('site').insertMany(myobj,function (err,res) {
        if (err)throw err;
        console.log('插入的文档数量为：'+res.insertedCount);
        db.close();
    });
});

//查询数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err)throw err;
    var dbo = db.db('runoob');
    dbo.collection('site').find({}).toArray(function (err,result) {//返回集合中所有数据
        if (err)throw err;
        console.log(result);
        db.close();
    });
});

//查询指定条件的数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:270017/';

MongoClient.connect(url,function (err,db) {
    if (err)throw err;
    var dbo = db.db('runoob');
    var whereStr = {'name':'菜鸟教程'}; //查询条件
    dbo.collection('site').find(whereStr).toArray(function (err,result) {
        if (err)throw  err;
        console.log(result);
        db.close();
    });
});


//更新数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err)throw err;
    var dbo = db.db('runoob');
    var whereStr = {'name':'菜鸟教程'};//查询条件
    var updataStr ={$set:{'url':'https://www.runoob.com'}};
    dbo.collection('site').updateOne(whereStr,updataStr,function (err,res) {
        if (err)throw err;
        console.log('文档更新成功');
        db.close();
    });
});

//更新多条数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var whereStr = {"type":'en'};   //查询条件
    var updateStr = {$set:{'url':'https://www.runoob.com'}};
    dbo.collection('site').updateMany(whereStr,updateStr,function(err,res){
        if (err)throw err;
        console.log(res.result.nModified+" 条文档被更新");
        db.close();
    });
});


//删除数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var whereStr = {'name':'菜鸟教程'};   //查询条件
    dbo.collection('site').deleteOne(whereStr,updateStr,function (err,obj) {
        if (err)throw err;
        console.log('文档删除成功');
        db.close();
    });
});

//删除多条数据 obj.result.n 删除的条数
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var whereStr = {type:'en'}; //查询条件
    dbo.collection('site').deleteMany(whereStr,function (err,obj) {
        if (err)throw err;
        console.log(obj.result.n +" 条文档被删除");
        db.close();
    });
});

//排序
//排序 使用 sort() 方法，该方法接受一个参数，规定是升序(1)还是降序(-1)。
//
// 例如：
//
// { type: 1 }  // 按 type 字段升序
// { type: -1 } // 按 type 字段降序

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err)throw err;
    var dbo = db.db('runoob');
    var mysort = {type:1};
    dbo.collection('site').find().sort(mysort).toArray(function (err,result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//查询分页
//limit()：读取两条数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:28017/';

MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    dbo.collection('site').find().limit(2).toArray(function (err,result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })
})
//skip(): 跳过前面两条数据，读取两条数据
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db('runoob');
    dbo.collection('site').find().skip(2).limit(2).toArray(function (err,result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//连接操作
// mongoDB 不是一个关系型数据库，但我们可以使用 $lookup 来实现左连接。
//
// 例如我们有两个集合数据分别为
//集合1：orders
//
// [
//   { _id: 1, product_id: 154, status: 1 }
// ]
// 集合2：products
//
// [
//   { _id: 154, name: '笔记本电脑' },
//   { _id: 155, name: '耳机' },
//   { _id: 156, name: '台式电脑' }
// ]

//$lookup 实现左连接
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection('orders').aggregate([
        {$lookup:
                {
                    from:'products',    //右集合
                    localField:'product_id',    //左集合join字段
                    foreignField:'_id', //右集合join字段
                    as:'orderdetails'   //新生成字段（类型array)
                }
        }
    ]).toArray(function (err,res) {
        if (err)throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});

//删除集合
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function (err,db) {
    if (err)throw err;
    var dbo = db.db('runoob');
    //删除test集合
    dbo.collection('test').drop(function (err,delOK) {  //执行成功，delOK返回true,否则返回false
        if (err)throw err;
        if (delOK) console.log('集合已删除');
        db.close();
    });
});


//Promise 是一个 ECMAScript 6 提供的类，目的是更加优雅地书写复杂的异步任务。
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/runoob';
MongoClient.connect(url).then((conn)=>{
    console.log('数据库已连接');
    var dbase = conn.db('rundb');
    dbase.createCollection('site').then((res)=>{
        console.log("已创建集合");
    }).catch((err)=>{
        console.log('数据库操作错误');
    }).finally(()=>{
        conn.close();
    });
}).catch((err)=>{
    console.log('数据库连接失败');
});


//Promise 数据操作  增加 、查询 、更改 、删除。
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/';
MongoClient.connect(url).then((conn)=>{
    console.log('数据库已连接');
    const test = conn.db('testdb').collection('test');
    //增加
    test.insertOne({'site':'runoob.com'}).then((res)=>{
        //查询
        return test.find().toArray().then((arr)=>{
            console.log(arr);
        });
    }).then(()=>{
        //更改
        return test.updateMany({'site':'runoob.com'},
            {$set:{'site':'example.com'}});
    }).then((res)=>{
        //查询
        return test.find().toArray().then((arr)=>{
            console.log(arr);
        });
    }).then(()=>{
        //删除
        return test.deleteMany({'site':'example.com'});
    }).then((res)=>{
        //查询
        return test.find().toArray().then((arr)=>{
            console.log(arr);
        });
    }).catch((err)=>{
        console.log('数据操作失败'+err.message);
    }).finally(()=>{
        con.close();
    });
}).catch((err)=>{
    console.log('数据库连接失败');
});

//用异步函数实现相同的数据操作
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/';

async function dataOperate(){
    var conn = null;
    try{
        conn = await  MongoClient.connect(url);
        console.log('数据库已连接');
        const test = conn.db('testdb').collection('test');
        //增加
        await test.insertOne({'site':'runoob.com'});
        //查询
        var arr = await test.find().toArray();
        console.log(arr);
        //更改
        await test.updateMany({'site':'runoob.com'},
            {$set:{'site':'example.com'}});
        //查询
        var arr = await test.find().toArray();
        console.log(err);
        //删除
        await test.deleteMany({'site':'example.com'});
        //查询
        arr = await test.find().toArray();
        console.log(arr);
    }catch(err){
        console.log('错误：'+err.message);
    }finally {
        if(conn!=null)conn.close();
    }
}
dataOperate();