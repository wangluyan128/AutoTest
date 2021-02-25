package com.dao;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Component;

/*
* 使用 @Autowired 和 @Required 时候需要注入对应的注解处理器，这很麻烦，所以 Spring 框架添加了一个 <context:annotation-config /> 标签，
* 当你在 XML 里面引入这个标签后，就默认注入了 AutowiredAnnotationBeanPostProcessor 和 RequiredAnnotationBeanPostProcessor 。
* */
@Component("serviceC")
public class ServiceC {
    private String serviceName;
    public String getServiceName(){
        return serviceName;
    }
    @Required
    public void setServiceName(String serviceName){
        this.serviceName = serviceName;
    }
    public void sayHello(){
        System.out.println("serviceA sayHello "+serviceName);
    }
}
