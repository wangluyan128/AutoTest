package com.test1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp3 {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans3.xml");
        //Student student =(Student)context.getBean("student");
        //System.out.println("Name: "+student.getName());
        //System.out.println("Age: "+student.getAge());
        Profile profile=(Profile)context.getBean("profile");
        profile.printAge();
        profile.printName();
    }
}
