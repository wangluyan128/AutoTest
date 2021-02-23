package com.course;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;
import redis.clients.jedis.Transaction;


@Component
@ConfigurationProperties(prefix="redis")
@PropertySource("classpath:/redis.properties")  //@PropertySource来指定自定义的资源目录
//在启动类上取消掉@EnableConfigurationProperties注解，springboot1.5版本之后不需要@EnableConfigurationProperties注解了。
public class JedisUtil extends CachingConfigurerSupport  {
    private static Logger logger =Logger.getLogger(JedisUtil.class);

    @Autowired
    private JedisPool jedisPool;

    public static final int EXPIRE = 5*60;

    public static final String LOCKED = "TRUE";

    @Value("${redis.host}")
    private String host;

    @Value("${redis.port}")
    private int port;

    @Value("${redis.timeout}")
    private int timeout;

    @Bean
    public JedisPool redisPoolFactory(){
        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        JedisPool jedisPool = new JedisPool(jedisPoolConfig,host,port,timeout,null);
        return jedisPool;
    }
    /*
    * 从redis连接池获取实例
    * */
    public Jedis getJedis(){
        Jedis jedis;
        jedis = jedisPool.getResource();
        return jedis;
    }
    /*
    *释放redis回连接池
    * @param jedis
    * */
    public void releaseJedis(Jedis jedis){
        if(jedis !=null){
            jedisPool.returnResource(jedis);
        }
    }
    /*
    * 获取key的value
    * @param key
    * @return
    * */
    public String getCacheValue(String key){
        String string = new String();
        try{
            Assert.notNull(this,"jedisUtil为空");
            Jedis jedis = this.getJedis();
            string = jedis.get(key);
            System.out.println("key:"+string);
            this.releaseJedis(jedis);
        }catch (Exception e){
            logger.error("in get redis key = "+ key,e);
        }
        return string;
    }
    /*
    * 更新key的value
    * @param key
    * @param value
    * @return
    * */
    public int updateCach(String key,String value){
        try{
            Assert.notNull(this,"jedisUtil为空");
            Jedis jedis = this.getJedis();
            String result = jedis.set(key,value);
            this.releaseJedis(jedis);
        }catch (Exception e){
            logger.error("in update redis key = "+key,e);
        }
        return 1;
    }
    /*
    * 删除key的value
    * @param key
    * @return
    * */
    public int removeCache(String key){
        try{
            Assert.notNull(this,"jedisUtil为空");
            Jedis jedis = this.getJedis();
            long result = jedis.del(key);
            this.releaseJedis(jedis);
        }catch (Exception e){
            logger.error("in del redis key="+key,e);
        }
        return 1;
    }
    /*
    * 带事务+watch的更新方法
    * @param key
    * @param value
    * */
    public void updateWatchKey(String key ,String value){
        try{
            Jedis jedis = this.getJedis();
            //watch key
            jedis.watch(key);
            //获得key的value
            value = jedis.get(key);
            if(value == null || value.equals("UNLOCK")){
                //开启事务
                Transaction tx = jedis.multi();
                //设置key,value:EXPIRE为key的过期时间
                tx.setex(key,EXPIRE,LOCKED);
                //提交事务，并判断
                if(null == tx.exec()){
                    this.releaseJedis(jedis);
                    throw new RuntimeException("key:"+key+"更新失败");
                }
            }else {
                this.releaseJedis(jedis);
                throw new RuntimeException("key:"+"更新失败");
            }
            this.releaseJedis(jedis);
        }catch (Error e){
            throw new RuntimeException(e);
        }
    }
}
