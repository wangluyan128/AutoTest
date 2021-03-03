package com.test1;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class HelloWorld {
    private String message;
    public void setMessage(String message){
        this.message = message;
    }
    public void getMessage(){
        System.out.println("Your Message: "+message);
    }
    //@PostConstruct 注释作为初始化回调函数的一个替代，@PreDestroy 注释作为销毁回调函数的一个替代
    @PostConstruct
    public  void init(){
        System.out.println("Bean is going through init.");
    }
    @PreDestroy
    public void destroy(){
        System.out.println("Bean will destroy now.");
    }
}
