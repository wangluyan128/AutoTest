package com.dao;

import org.springframework.beans.factory.annotation.Autowired;

public class ServiceB {
    //(required = false)  检查依赖的bean是否存在
    @Autowired
    private ServiceA serviceA;
    public ServiceA getServiceA(){
        return serviceA;
    }
    public void setServiceA(ServiceA serviceA){
        this.serviceA = serviceA;
    }
    public void sayHello(){
        serviceA.sayHello();
    }

    //@Autowired
    private ServiceC serviceC;
    public void sayHelloC(){serviceC.sayHello();}
}
