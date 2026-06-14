package br.com.victor.desafiobackend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("API de Manutenções e Chamados")
                        .version("v1.0.0")
                        .description("API RESTful desenvolvida para o Teste Técnico - Gestão de Incidentes e Manutenções.")
                        .contact(new Contact()
                                .name("Victor Hugo De Pieri Justino")
                                .email("vdepierejustino@gmail.com")
                                .url("https://github.com/VictorPortugues07")));
    }
}