package com.redis.redisDao;

import com.redis.entity.User;

import java.util.List;

public class UserDao extends AbstractBaseRedisDao implements IUserDao{

    @Override
    public boolean add(User user) {
        return false;
    }

    @Override
    public boolean add(List<User> list) {
        return false;
    }

    @Override
    public void delete(String key) {

    }

    @Override
    public void delete(List<String> keys) {

    }

    @Override
    public boolean update(User user) {
        return false;
    }

    @Override
    public User get(String keyId) {
        return null;
    }
}
