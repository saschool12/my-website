package com.example.website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @GetMapping("/api/status")
    public String status() {
        return "Java backend is working!";
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from Java!";
    }

    @GetMapping("/api/info")
    public String info() {
        return "Java + JavaScript full-stack website";
    }
}
