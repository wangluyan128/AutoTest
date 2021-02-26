package com.redis.entity;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.redis.util.RedisCacheUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;




//@Controller
@RequestMapping("/redis/")
public class RedisDemoController {
    @Resource
    private RedisCacheUtil redisCache;

    // 查询数据
    @ResponseBody
    @RequestMapping("list")
    public String list(HttpServletResponse response, HttpServletRequest request){
        String re = redisCache.hget("student", "test");
        System.out.println(String.valueOf(re));
        return "success";
    }
    // 添加数据
    @ResponseBody
    @RequestMapping("add")
    public String add(HttpServletResponse response, HttpServletRequest request){
        redisCache.hset("student", "test", "小明");
        return "success";
    }

}
