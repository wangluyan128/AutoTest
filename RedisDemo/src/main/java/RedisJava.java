import redis.clients.jedis.Jedis;
import redis.clients.jedis.ShardedJedis;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class RedisJava {
    public static void main(String[] args){
        //连接本地的Readis服务
        Jedis jedis = new Jedis("localhost");
        //Jedis jedis = new Jedis("192.168.124.129",6379);
        //如果Redis服务设置来密码，需要下面这行，没有就不需要
        jedis.auth("123456");
        System.out.println("连接成功");
        //查看服务是否运行
        System.out.println("服务正在运行：" + jedis.ping());

        //设置redis字符串数据
        jedis.set("runoobkey","www.runoob.com");
        //获取存储的数据并输出
        System.out.println("redis 存储的字符串为："+jedis.get("runoobkey"));

        //存储数据到列表中
        jedis.lpush("site-list","Runoob");
        jedis.lpush("site-list","Goolge");
        jedis.lpush("site-list","Taobao");
        //获取存储的数据并输出
        List<String> list = jedis.lrange("site-list",0,2);
        for (int i = 0;i<list.size();i++){
            System.out.println("列表项为："+list.get(i));
        }

        //获取数据并输出 遍历所有的key
        Set<String> keys = jedis.keys("*");
        Iterator<String> it = keys.iterator();
        while (it.hasNext()){
            String key = it.next();
            System.out.println(key);
        }

        //操作哈希
        //插入数据
        jedis.hset("user1","uname","ls");
        jedis.hset("user1","sex","女");
        System.out.println(jedis.hget("user1","sex"));
        System.out.println(jedis.hgetAll("user1"));
        //操作列表（堆栈结构）
        jedis.lpush("hobby","a","b","c","d");
        //从栈开始取值
        System.out.println(jedis.lpop("hobby"));
        //从栈底开始取值
        System.out.println(jedis.rpop("hobby"));
    }
    Jedis jedis1 ;

    private void KeyOperate(){
        System.out.println("==============key===========");
        //清空数据
        System.out.println("清空库中所有数据：" +jedis1.flushDB());
        //判断key是否存在
        System.out.println("判断key999键是否存在："+jedis1.exists("key999"));
        System.out.println("新增key001,value001键值对："+jedis1.set("key001","value001"));
        System.out.println("判断key001是否存在："+jedis1.exists("key001"));
        //输出系统中所有的key
        System.out.println("新增key002,value002键值对："+jedis1.set("key002","value002"));
        System.out.println("系统下所有键如下：");
        Set<String> keys = jedis1.keys("*");
        Iterator<String> it = keys.iterator();
        while (it.hasNext()){
            String key = it.next();
            System.out.println(key);
        }
        //删除某个key,若key不存在，则忽略该命令。
        System.out.println("系统中删除key002:"+jedis1.del("key002"));
        System.out.println("判断key002是否存在："+jedis1.exists("key002"));
        //设置key001的过期时间
        System.out.println("设置key001的过期时间为5秒："+jedis1.expire("key001",5));
        try{
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //查看某个key的剩余生存时间，单位【秒】,永久生存或者不存在的都返回-1
        System.out.println("查看key001的剩余生存时间："+jedis1.ttl("key001"));
        //移除某个key的生存时间
        System.out.println("移除key001的生存时间："+jedis1.persist("key001"));
        System.out.println("查看key001的剩余生存时间："+jedis1.ttl("key001"));
        //查看key所存储的值的类型
        System.out.println("查看key所存储的值类型："+jedis1.type("key001"));
        /*
        * 一些其他方法：1.修改键名：jedis.rename("key6","key0");
        *            2.将当前db的key移动到给定的db当中：jedis.move("foo",1)
        * */
    }
    private void StringOperate(){
        System.out.println("===================String_1========================");
        //清空数据
        System.out.println("清空库中所有数据："+jedis1.flushDB());

        System.out.println("================增================");
        jedis1.set("key001","value001");
        jedis1.set("key002","value002");
        jedis1.set("key003","value003");
        System.out.println("已新增的3个键值对如下：");
        System.out.println(jedis1.get("key001"));
        System.out.println(jedis1.get("key002"));
        System.out.println(jedis1.get("key003"));

        System.out.println("=================删===============");
        System.out.println("删除key003键值对："+jedis1.del("key003"));
        System.out.println("获取key003键对应的值："+jedis1.get("key003"));

        System.out.println("=================改=================");
        //1.直接覆盖原来的数据
        System.out.println("直接覆盖key001原来的数据："+jedis1.set("key001","value001-update"));
        System.out.println("获取key001对应的新值："+jedis1.get("key001"));
        //2.直接覆盖原来的数据
        System.out.println("在key002原来值后面追加："+jedis1.append("key002","appendString"));
        System.out.println("获取key002对应的新值："+ jedis1.get("key002"));

        System.out.println("====================增，删，查（多个）=============");
        /*
        * mset,mgetm同时新增，修改，查询多个键值对
        * 等价于：
        * jedis.set("name","ssss");
        * jedis.set("jarorwar","xxxx");
        *
        * */
        System.out.println("一次性新增key201,key202,key203,key204及其对应值："+jedis1.mset("key201","value201",
                "key202","value202","key203","value203","key204","value204"));
        System.out.println("一次性获取key201,key202,key203,key204各自对应的值："+
                jedis1.mget("key201","key202","key203","key204"));
        System.out.println("一次性删除key201,key202:"+jedis1.del(new String[]{"key201","key202"}));
        System.out.println("一次性获取key201,key202,key203,key204各自对应的值："+
                jedis1.mget("key201","key202","key203","key204"));
        System.out.println();
        /*
        //ShardedJedis shardedJedis = shardedJedisPool.getResource(); spring里使用
        //jedis具备的功能shardedJedis中也可直接使用，下面测试一些前面没用过的方法
        System.out.println("======================String_2==========================");
        // 清空数据
        System.out.println("清空库中所有数据："+jedis.flushDB());

        System.out.println("=============新增键值对时防止覆盖原先值=============");
        System.out.println("原先key301不存在时，新增key301："+shardedJedis.setnx("key301", "value301"));
        System.out.println("原先key302不存在时，新增key302："+shardedJedis.setnx("key302", "value302"));
        System.out.println("当key302存在时，尝试新增key302："+shardedJedis.setnx("key302", "value302_new"));
        System.out.println("获取key301对应的值："+shardedJedis.get("key301"));
        System.out.println("获取key302对应的值："+shardedJedis.get("key302"));

        System.out.println("=============超过有效期键值对被删除=============");
        // 设置key的有效期，并存储数据
        System.out.println("新增key303，并指定过期时间为2秒"+shardedJedis.setex("key303", 2, "key303-2second"));
        System.out.println("获取key303对应的值："+shardedJedis.get("key303"));
        try{
            Thread.sleep(3000);
        }
        catch (InterruptedException e){
        }
        System.out.println("3秒之后，获取key303对应的值："+shardedJedis.get("key303"));

        System.out.println("=============获取原值，更新为新值一步完成=============");
        System.out.println("key302原值："+shardedJedis.getSet("key302", "value302-after-getset"));
        System.out.println("key302新值："+shardedJedis.get("key302"));

        System.out.println("=============获取子串=============");
        System.out.println("获取key302对应值中的子串："+shardedJedis.getrange("key302", 5, 7));
        */
    }
}
