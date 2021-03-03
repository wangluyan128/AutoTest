package com.test1;

import org.springframework.beans.factory.annotation.Required;

public class Student {
    private Integer age;
    private String name;
    private Integer id;
   // public Student(){
   //     System.out.println("inside student");
   // }
    //@Required 注释应用于 bean 属性的 setter 方法，它表明受影响的 bean 属性在配置时必须放在 XML 配置文件中，否则容器就会抛出一个 BeanInitializationException 异常
    //@Required
    public void setAge(Integer age) {
        System.out.println("age:"+age);
        this.age = age;
    }
    public Integer getAge() {
        System.out.println("age1:");
        return age;
    }
    //@Required
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
    public String a(){
        return "age:"+age;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
