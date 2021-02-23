package com.example.demo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import redis.clients.jedis.ShardedJedis;
import redis.clients.jedis.ShardedJedisPool;

import javax.annotation.Resource;

@Service("redisPool")
@Slf4j
public class RedisPoolDemo {
    @Resource(name = "shardedJedisPool")
    private ShardedJedisPool shardedJedisPool;

    public ShardedJedis instance(){
        return shardedJedisPool.getResource();
    }
    public void safeClose(ShardedJedis shardedJedis){
        try{
            if(shardedJedis !=null){
                shardedJedis.close();;
            }
        }catch (Exception e){
            System.out.println("return redis resource exception"+e);
        }
    }
}
