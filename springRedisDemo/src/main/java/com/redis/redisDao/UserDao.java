package com.redis.redisDao;

import com.redis.entity.User;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.util.Assert;

import java.util.List;

public class UserDao extends AbstractBaseRedisDao implements IUserDao{

    @Override
    public boolean add(final User user) {
        Boolean result = (Boolean) redisTemplate.execute(new RedisCallback<Boolean>() {
            @Override
            public Boolean doInRedis(RedisConnection redisConnection) throws DataAccessException {
                RedisSerializer<String> serializer = getRedisSerializer();
                byte[] key = serializer.serialize(user.getId());
                //将ID序列化成key
                byte[] value = serializer.serialize(user.getName());
                return redisConnection.setNX(key,value);
            }
        });
        return result;
    }

    @Override
    public boolean add(List<User> list) {
        Assert.notEmpty(list);
        Boolean result = (Boolean) redisTemplate.execute(new RedisCallback() {
            @Override
            public Boolean doInRedis(RedisConnection redisConnection) throws DataAccessException {
                RedisSerializer<String> serializer = getRedisSerializer();
                for (int i = 0;i<list.size();i++){
                    User user = list.get(i);
                    byte[] key = serializer.serialize(user.getId());
                    //将ID序列化成Key
                    byte[] value = serializer.serialize(user.getName());
                    redisConnection.setNX(key,value);
                }
                return true;
            }
        },false,true);
        return result;
    }

    @Override
    public void delete(String key) {
        redisTemplate.delete(key);
    }

    @Override
    public void delete(List<String> keys) {
        redisTemplate.delete(keys);
    }

    @Override
    public boolean update(final User user) {
        String key= user.getId();
        if(get(key)==null){
            throw new NullPointerException("数据行不存在，key= "+key);
        }
        Boolean result = (Boolean) redisTemplate.execute(new RedisCallback() {
            @Override
            public Object doInRedis(RedisConnection redisConnection) throws DataAccessException {
                RedisSerializer<String> serializer = getRedisSerializer();
                byte[] key = serializer.serialize(user.getId());
                //将ID序列化成key
                byte[] value = serializer.serialize(user.getName());
                redisConnection.set(key,value);
                return true;
            }
        });
        return result;
    }

    @Override
    public User get(String keyId) {
        User user = (User) redisTemplate.execute(new RedisCallback() {
            @Override
            public Object doInRedis(RedisConnection redisConnection) throws DataAccessException {
                RedisSerializer<String> serializer = getRedisSerializer();
                byte[] key= serializer.serialize(keyId);
                byte[] value = redisConnection.get(key);
                if (value == null){
                    return null;
                }
                String name = serializer.deserialize(value);
                return new User(keyId,name,null);
            }
        });
        return user;
    }
}
