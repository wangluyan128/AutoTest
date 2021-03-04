import redis    #导入redis模块
'''
redis 提供两个类 Redis 和 StrictRedis, StrictRedis 用于实现大部分官方的命令，Redis 是 StrictRedis 的子类，用于向后兼用旧版本。

redis 取出的结果默认是字节，我们可以设定 decode_responses=True 改成字符串。
'''
r = redis.StrictRedis(host='localhost',port=6379,password=123456,db=0,decode_responses=True)

r.set('name','runoob')  #设置name对应的值
print(r['name'])
print(r.get('name'))    #取出键name对应的值
print(type(r.get('name')))  #查看类型
r.close()

#连接池
'''
redis-py 使用 connection pool 来管理对一个 redis server 的所有连接，避免每次建立、释放连接的开销。
默认，每个Redis实例都会维护一个自己的连接池。可以直接建立一个连接池，然后作为参数 Redis，这样就可以实现多个 Redis 实例共享一个连接池。
'''
#pool = redis.ConnectionPool(host='localhost',port=6379,decode_reponses=True)
#r = redis.Redis(host='localhost',port=6379,password=123456,decode_responses=True)
#r.set('name1','runoob1')    #设置name对应的值
#print(r.get('name1'))       #取出键name对应的值

'''
set(name, value, ex=None, px=None, nx=False, xx=False)

在 Redis 中设置值，默认，不存在则创建，存在则修改。

参数：

ex - 过期时间（秒）
px - 过期时间（毫秒）
nx - 如果设置为True，则只有name不存在时，当前set操作才执行
xx - 如果设置为True，则只有name存在时，当前set操作才执行
'''
#1.ex - 过期时间（秒） 这里过期时间是3秒，3秒后p，键food的值就变成None
pool = redis.ConnectionPool(host = 'localhost',port = 6379,password =123456,decode_responses=True)
r = redis.Redis(connection_pool=pool)
r.set('food','mutton',ex = 3)  #key是‘food' value是’mutton'将键值对存入redis缓存
print(r.get('food'))        #mutton取出键food对应的值
#2.px - 过期时间（豪秒） 这里过期时间是3豪秒，3毫秒后，键foo的值就变成None
pool1 = redis.ConnectionPool(host = 'localhost',port = 6379,password =123456,decode_responses=True)
r = redis.Redis(connection_pool=pool1)
r.set('food1','beef',px=3)      #3毫秒
print(r.get('food1'))

#3.nx -如果设置为True，则只有name不存在时，当前set操作才执行（新建）
pool2 = redis.ConnectionPool(host = 'localhost',port = 6379,password =123456,decode_responses=True)
r = redis.Redis(connection_pool=pool2)
print(r.set('fruit','watermelon',nx=True))  #True --不存在
#如果键fruit不存在，那么输出是True;如果键fruite已经存在，输出是None

#4.xx -如果设置为True，则只有name存在时，当前set操作才执行（修改）
print(r.set('fruit','watermelon',xx=True))  #True --已经存在
#如果键fruite已经存在，那么输出是True；如果键fruit不存在，输出是None

#5.setnx(name,value) 设置值，只有name不存在时，执行设置操作（添加）
print(r.setnx('fruite1','banana'))  #fruite1不存在，输出为True

#6.setex(name,time,value)  设置值
#参数  time - 过期时间（数字秒或timedelta对象）
import time
pool = redis.ConnectionPool(host = 'localhost',port = 6379,password =123456,decode_responses=True)
r = redis.Redis(connection_pool=pool)
r.setex('fruit2',5,'organge')
time.sleep(5)
print(r.get('fruit2'))  #5秒后，取值就从orange变成None

#7.psetex(name,time_ms,value)
#参数： time_ms - 过期时间（数字毫秒或timedelta对象）
r.psetex('fruit3',5000,'apple')
time.sleep(5)
print(r.get('fruit3'))  #5000毫秒后，取值就从apple变成None

#8.mset(*args,**kwargs)  批量设置值
r.mget({'k1':'v1','k2':'v2'})
r.mset({'k1':'v1','k2':'v2'}) #这里k1和k2不能带引号 一次设置对个键值对
print(r.mget("k1","k2"))    #一次取出多个键对应的值
print(r.mget('k1'))

#9.mget(keys,*args)  批量获取
print(r.mget('k1','k2'))
print(r.mget(['k1','k2']))
print(r.mget('fruit','fruit1','fruit2','k1','k2'))  #将目前redis缓存中的键对应的值批量取出来

#10.getset(name,value)  设置新值并获取原来的值
print(r.getset('food','barbecue'))  #设置的新值是barbecue设置前的值是beef,没改成？

#11.getrange(key,start,end) 获取子序列（根据字节获取，非字符）
'''
参数：

name - Redis 的 name
start - 起始位置（字节）
end - 结束位置（字节）
如： "君惜大大" ，0-3表示 "君"
'''
r.set('cn_name','君惜大大') #汉字
print(r.getrange('cn_name',0,2))    #取索引号是0-2前3位的字节 君 切片操作（一个汉字3个字节 1个字母一个字节 每个字节8bit)
print(r.getrange('cn_name',0,-1))   #取所有的字节 君惜大大 切片操作
r.set('en_name','junxi')    #字母
print(r.getrange('en_name',0,2))    #取索引号0-2 前3位的字节 jun切片操作（一个汉字3个字节 1个字母一个字节 每个字节8bit)
print(r.getrange('en_name',0,-1))   #取所有的字节 junxi 切片操作

#12.setrange(name,offset,value) 修改字符串，从指定字符串索引开始向后替换（新值太长时，则向后添加）
'''
参数：

offset - 字符串的索引，字节（一个汉字三个字节）
value - 要设置的值
'''
r.setrange('en_name',1,'ccc')
print(r.get('en_name')) #jccci原始值是junxi 从索引号是1开始替换成ccc变成jccci

#13 setbit(name,offset,value) 对name对应值的二进制表示的位进行操作
'''
参数：

name - redis的name
offset - 位的索引（将值变换成二进制后再进行索引）
value - 值只能是 1 或 0
'''
'''
注：如果在Redis中有一个对应： n1 = "foo"，

那么字符串foo的二进制表示为：01100110 01101111 01101111

所以，如果执行 setbit('n1', 7, 1)，则就会将第7位设置为1，

那么最终二进制则变成 01100111 01101111 01101111，即："goo"

扩展，转换二进制表示：
'''
source = '陈思维'
source = 'foo'
for i in source:
    num= ord(i)
    print(bin(num).replace('b',''))

print(r.getbit('fool',0))   #0 fool对应的二进制 4 个字节 32位第0位是0还是1

#14.getbit(name,offset)  获取name对应的值的二进制表示中的某位的值（0或1）
print(r.getbit('fool',0))   #0 fool对应的二进制4个字节 32位 第0位是0还是1

#15.bitcount(key,start=None,end=None)   获取name对应的值的二进制表示中1的个数
'''
参数：

key - Redis的name
start - 字节起始位置
end - 字节结束位置
'''
print(r.get('foo')) #goo1 01100111
print(r.bitcount('foo',0,1))    #11表示前2个字节中，1出现的个数

#16 bitop(operation,dest,*keys)

#管道(pipeline)
'''
redis默认在执行每次请求都会创建（连接池申请连接）和断开（归还连接池）一次连接操作，如果想要在一次请求中指定多个命令，则可以使用pipline实现一次请求指定多个命令，并且默认情况下一次pipline 是原子性操作。

管道（pipeline）是redis在提供单个请求中缓冲多条服务器命令的基类的子类。它通过减少服务器-客户端之间反复的TCP数据库包，从而大大提高了执行批量命令的功能。
'''
import time
pool = redis.ConnectionPool(host = 'localhost',port = 6379,password =123456,decode_responses=True)
r = redis.Redis(connection_pool=pool)

#pip = r.pipeline(transaction=False)    #默认的情况下，管道里执行的命令可以保证执行的原子性，执行pip=r.pipeline(transaction=False)可以禁用这一特性。
#pip = r.pipeline(transaction=True)
pipe = r.pipeline()     #创建一个管道

pipe.set('name','jack')
pipe.set('role','sb')
pipe.sadd('faz','baz')
pipe.incr('num')    #如果num不存在则value为1，如果存在，则value自增1
pipe.execute()

print(r.get('name'))
print(r.get('role'))
print(r.get('num'))
#管道的命令可以写在一起，如：
pipe.set('hello','redis').sadd('faz','baz').incr('num').execute()
print(r.get('name'))
print(r.get('role'))
print(r.get('num'))