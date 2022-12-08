package com.example.order_register_new;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

@SpringBootApplication
public class OrderRegisterNewApplication {

    public static void main(String[] args) {
//        SpringApplication.run(OrderRegisterNewApplication.class, args);
        SpringApplication app = new SpringApplication(OrderRegisterNewApplication.class);
        app.setDefaultProperties(Collections
                .singletonMap("server.port", "8082"));
        app.run(args);
    }

}
