package com.test1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp1 {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans1.xml");
        TextEditor te = (TextEditor)context.getBean("textEditor");
        te.spellCheck();
    }
}
