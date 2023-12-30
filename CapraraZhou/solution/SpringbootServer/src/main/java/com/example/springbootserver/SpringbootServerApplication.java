package com.example.springbootserver;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(
		title = "FootballXData SQL Api",
		description = "Documentation for SQL API that accesses slowly changing datasets",
		version = "1.0.0"
))
public class SpringbootServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringbootServerApplication.class, args);
	}
}
