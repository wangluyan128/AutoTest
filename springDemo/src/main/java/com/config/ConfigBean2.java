package com.config;

import com.dao.ServiceB;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigBean2 {

    @Bean
    public ServiceB serviceB(){
        return new ServiceB();
    }
}
