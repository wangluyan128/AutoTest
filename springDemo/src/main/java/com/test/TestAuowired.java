package com.test;

import com.dao.ServiceB;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestAuowired {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext cpxa = new ClassPathXmlApplicationContext("bean-test.xml");
        cpxa.getBean("serviceB", ServiceB.class).sayHello();
        cpxa.getBean("serviceB", ServiceB.class).sayHelloC();
        //System.out.println("sss");
    }
}
