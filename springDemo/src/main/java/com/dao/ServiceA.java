package com.dao;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.beans.factory.annotation.Value;

public class ServiceA {
    //这里加了一个注解
    @Value("${service.name}")
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
