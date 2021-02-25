package com.test;

import com.dao.ServiceB;
import org.springframework.context.annotation.*;

@Configuration
@ComponentScan(basePackages = "com.config")
@Import(com.config.ConfigBean2.class)
@PropertySource(value = {"classpath:config.properties"})
public class TestAnnotation {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(TestAnnotation.class);
        ctx.getBean("serviceB", ServiceB.class).sayHello();
    }
}


//只有类上标注 @Configuration、@Component、@ComponentScan、@Import 注解的 Bean 才是候选 Bean。