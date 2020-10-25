package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class DemoApplication {

/*
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }*/

    @RequestMapping("/")
    @ResponseBody
    String home(){
        return "Hello World!";
    }


    public static void main(String[] args) throws Exception{
        SpringApplication.run(DemoApplication.class,args);
    }
}