package com.test1;

import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;

public class MainApp {
    public static void main(String[] args) {
        /*获取bean
        XmlBeanFactory factory = new XmlBeanFactory(new ClassPathResource("beans.xml"));
        HelloWorld obj = (HelloWorld)factory.getBean("helloWorld");
        obj.getMessage();
        * */
        /* 读取配置地址的方式获取bean
        ApplicationContext context = new FileSystemXmlApplicationContext("E:\\work\\AutoTest\\springDemo\\src\\main\\resources\\beans.xml");
        HelloWorld obj = (HelloWorld)context.getBean("helloWorld");
        obj.getMessage();
         */
        /*作用域
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        HelloWorld objA =(HelloWorld)context.getBean("helloWorld");
        objA.setMessage("I'm object A");
        objA.getMessage();
        HelloWorld objB = (HelloWorld)context.getBean("helloWorld");
        objB.getMessage();
        */
        /*销毁bean
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        HelloWorld obj = (HelloWorld)context.getBean("helloWorld");
        obj.getMessage();
        context.registerShutdownHook();
        */
        /*xml bean继承
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        HelloWorld1 objA = (HelloWorld1)context.getBean("helloWorld1");

        objA.getMessage1();
        objA.getMessage2();

        HelloIndia objB = (HelloIndia)context.getBean("helloIndia");
        objB.getMessage1();
        objB.getMessage2();
        objB.getMessage3();
        */
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        HelloWorld obj =(HelloWorld)context.getBean("helloWorld");
        obj.getMessage();
        context.registerShutdownHook();

        ApplicationContext ctx = new AnnotationConfigApplicationContext(HelloWorldConfig.class);
        HelloWorld helloWorld = ctx.getBean(HelloWorld.class);
        helloWorld.setMessage("Hello world");
        helloWorld.getMessage();

        ApplicationContext ctx1 = new AnnotationConfigApplicationContext(ConfigB.class);
        A a = ctx1.getBean(A.class);
        B b = ctx1.getBean(B.class);
    }
}
