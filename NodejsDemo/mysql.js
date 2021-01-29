//Error: ER_NOT_SUPPORTED_AUTH_MODE 原因：node-mysql 模块不支持mysql的加密方式
//alter user 'root'@'localhost' identified with mysql_native_password by '123456';
// flush privileges;
//因为数据库是异步的所以在响应结果的时候必须加上异步, 不然结果集就会是undefined, 而且前面还必须加上事先对数据库的访问
//数据库连接参数说明：
// 参数	描述
// host	主机地址 （默认：localhost）
// 　　user	用户名
// 　　password	密码
// 　　port	端口号 （默认：3306）
// 　　database	数据库名
// 　　charset	连接字符集（默认：'UTF8_GENERAL_CI'，注意字符集的字母都要大写）
// 　　localAddress	此IP用于TCP连接（可选）
// 　　socketPath	连接到unix域路径，当使用 host 和 port 时会被忽略
// 　　timezone	时区（默认：'local'）
// 　　connectTimeout	连接超时（默认：不限制；单位：毫秒）
// 　　stringifyObjects	是否序列化对象
// 　　typeCast	是否将列值转化为本地JavaScript类型值 （默认：true）
// 　　queryFormat	自定义query语句格式化方法
// 　　supportBigNumbers	数据库支持bigint或decimal类型列时，需要设此option为true （默认：false）
// 　　bigNumberStrings	supportBigNumbers和bigNumberStrings启用 强制bigint或decimal列以JavaScript字符串类型返回（默认：false）
// 　　dateStrings	强制timestamp,datetime,data类型以字符串类型返回，而不是JavaScript Date类型（默认：false）
// 　　debug	开启调试（默认：false）
// 　　multipleStatements	是否许一个query中有多个MySQL语句 （默认：false）
// 　　flags	用于修改连接标志
// 　　ssl	使用ssl参数（与crypto.createCredenitals参数格式一至）或一个包含ssl配置文件名称的字符串，目前只捆绑Amazon RDS的配置文件
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'dms',
    port:'3306'
});
connection.connect();
var sql ="select * from dms.access_log";


/*
//查询
connection.query(sql,function (error,result,fields) {
    if (error){
        console.log('[SELECT ERROR] -',err.message);
    }
    console.log('-------------select--------------');
    console.log(result);
    console.log('---------------------------\n\n');
});

//插入
var addSql = 'insert into dms.message(id,title,type,relation_id,status)values(?,?,?,?,?) ';
var addSqlParams = ['1','菜鸟工具',1,1,0];
connection.query(addSql,addSqlParams,function (err,result) {
    if (err){
        console.log('[insert error]-',err.message);
        return;
    }
    console.log('-------------INSERT--------------');
    console.log('insert id:',result.id)
    console.log('INSERT ID:',result);
    console.log('------------------------------\n\n');
});


//更新
var modSql = 'update dms.message set title = ?,type=? ';
var modSqlParams = ['菜鸟移动站','2'];
connection.query(modSql,modSqlParams,function (err,result) {
    if (err){
        console.log('[UPDATE ERROR]-',err.message);
        return;
    }
    console.log('----------------------update----------------');
    console.log('update affectedRows',result.affectedRows);
});
*/

//删除数据
var delSql = 'delete from dms.message where id = 1';
connection.query(delSql,function (err,result) {
    if (err){
        console.log('[DELETE ERROR]-',err.message);
        return;
    }
    console.log('-----------------DELETE---------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('--------------------------------\n\n');
})

connection.end();