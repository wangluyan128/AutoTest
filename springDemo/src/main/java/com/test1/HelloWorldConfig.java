package com.test1;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//带有 @Configuration 的注解类表示这个类可以使用 Spring IoC 容器作为 bean 定义的来源。@Bean 注解告诉 Spring，一个带有 @Bean 的注解方法将返回一个对象，该对象应该被注册为在 Spring 应用程序上下文中的 bean
@Configuration
public class HelloWorldConfig {
    @Bean
    public HelloWorld helloWorld(){
        return new HelloWorld();
    }
}
/*等同于
<beans>
<bean id="helloWorld" class="com.tutorialspoint.HelloWorldConfig" />
</beans>
*/