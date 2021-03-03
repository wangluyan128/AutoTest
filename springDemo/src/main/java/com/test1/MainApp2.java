package com.test1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp2 {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans2.xml");
        JavaCollection jc = (JavaCollection)context.getBean("javaCollection");
        jc.getAddressList();
        jc.getAddressSet();
        jc.getAddressMap();
        jc.getAddressProp();
    }
}
