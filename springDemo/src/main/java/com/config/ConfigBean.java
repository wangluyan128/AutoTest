package com.config;

import com.dao.ServiceA;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigBean {

    @Bean
    public ServiceA serviceA(){
        return new ServiceA();
    }
}
