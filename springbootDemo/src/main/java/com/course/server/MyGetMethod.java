package com.course.server;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@Api(value = "/",description = "这是全部的get方法")

public class MyGetMethod {

    @RequestMapping(value = "/get",method = RequestMethod.GET)
    @ApiOperation(value="测试get方法",httpMethod = "GET")
    public String getValue(HttpServletResponse response){
        return "The first Get!";
    }

    @RequestMapping(value = "/getCookies",method = RequestMethod.GET)
    @ApiOperation(value = "通过这个方法可以获取到Cookies",httpMethod ="GET")
    public String getCookies(HttpServletResponse response){

        //HttpSerletRequest 装请求信息的类
        //HttpSerletResponse 装响应信息的类
        Cookie cookie = new Cookie("login","true");
        response.addCookie(cookie);

        return "恭喜你获得cookies信息成功";
    }
    /*
    * 要求客户端携带cookies访问
    * 这是一个需要携带cookies信息才有访问的get请求
    * */
    @RequestMapping(value="/get/with/cookies",method = RequestMethod.GET)
    @ApiOperation(value = "要求客户端携带cookies访问",httpMethod = "GET")
    public String getWithCookies(HttpServletRequest request){

        Cookie[] cookies=request.getCookies();


        if (Objects.isNull(cookies)){
            return  "你必须携带cookies信息来";
        }
        for (Cookie cookie:cookies){
            System.out.println(cookie.getName());
            System.out.println(cookie.getValue());
            if (cookie.getName().equals("login") &&
                    cookie.getValue().equals("true")){
                System.out.println("111");
                return "这是一个需要携带cookies信息才能访问的get请求！";
            }
        }
        return  "你必须携带cookies信息来";

    }
    /*
    * 开发一个需要携带参数才能访问的get请求
    * 第一种实现方式url:key=value&key=value
    * 我们来模拟获取商品列表
    * */

    @RequestMapping(value ="/get/with/param",method = RequestMethod.GET)
    @ApiOperation(value = "需要携带参数才能访问的方法",httpMethod = "GET")
    public Map<String,Integer> getList(@RequestParam Integer start,
                                       @RequestParam Integer end){
        Map<String,Integer> myList = new HashMap<>();

        myList.put("鞋",400);
        myList.put("干脆面",1);
        myList.put("衬衫",300);

        return  myList;
    }

    /*
    * 第二种需要携带参数访问的get请求
    * url:port/get/with/param/10/20
    * */
    @RequestMapping(value = "/get/with/param/{start}/{end}",method = RequestMethod.GET)
    @ApiOperation(value = "需要携带参数才能访问的方法,第二种方法",httpMethod = "GET")


    public Map myGetList(@PathVariable Integer start,
                         @PathVariable Integer end){
        Map<String,Integer> myList = new HashMap<>();

        myList.put("鞋",400);
        myList.put("干脆面",1);
        myList.put("衬衫",300);

        return  myList;
    }

    /*
     * 第二种需要携带参数访问的get请求,必填项
     * url:port/get/with/param/10/20
     * */
    @RequestMapping(value = "/get/with/param/{id}/{name}",method = RequestMethod.GET)
    @ApiOperation(value = "需要携带参数才能访问的方法,必填项",httpMethod = "GET")


    public Map myGetListR(@ApiParam(name = "id",value = "用户ID",required =true) Long id,
                         @ApiParam(name = "name",value = "用户名") String name){
        Map<String,Integer> myList = new HashMap<>();

        myList.put("鞋",400);
        myList.put("干脆面",1);
        myList.put("衬衫",300);

        return  myList;
    }



}
