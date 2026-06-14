# Decisões de Arquitetura e Notas Técnicas

Este documento detalha as escolhas técnicas feitas durante o desenvolvimento do desafio, os _trade-offs_ considerados e as oportunidades de melhoria futura.

## 1. Decisões Técnicas

- **Java Records (DTOs):** Adotados para tráfego de dados imutável, reduzindo _boilerplate_ e garantindo maior segurança na transferência de informações entre camadas.
- **Standalone Components (Angular 18):** Escolha feita para modernizar a estrutura do projeto, eliminando a dependência de `NgModules` e facilitando a modularização e manutenção.
- **Loading Interceptor:** Implementado como um _Singleton_ para monitorar todas as requisições HTTP, garantindo uma UX consistente sem a necessidade de lógica de loading repetida nos componentes.
- **Clean Architecture (Básica):** Separação clara entre Controllers, Services e Repositories, permitindo que a lógica de negócio esteja desacoplada da infraestrutura de persistência.

## 2. Trade-offs (Compromissos)

- **Mockito vs. Testes de Integração:** Optei por focar em testes unitários com Mockito para os Services.
  - _Trade-off:_ Testes de integração (que sobem o banco de dados) garantem maior segurança contra erros de query, mas aumentam drasticamente o tempo de build. A prioridade foi feedback rápido para desenvolvimento.
- **Spring Boot vs. Frameworks Leves:** O Spring Boot foi escolhido pela sua robustez, maturidade e vasta gama de utilitários (Spring Data, Validation), apesar de ter um _footprint_ de memória maior que soluções como Quarkus ou Micronaut.
- **State Management:** A gestão de estado no Angular foi mantida localmente nos componentes. Para uma aplicação maior, a implementação de NGRX ou Signals centralizados seria necessária, mas para este desafio, a simplicidade foi priorizada para manter a legibilidade.

## 3. Roadmap de Melhorias Futuras

- **Segurança:** Implementação de JWT (JSON Web Tokens) com Spring Security para autenticação e autorização.
- **Observabilidade:** Adição do Spring Boot Actuator e integração com Prometheus/Grafana para monitoramento de métricas em tempo real.
- **Containerização:** Criação de `Dockerfile` e `docker-compose.yml` para facilitar o deploy e padronizar o ambiente de desenvolvimento.
- **Caching:** Uso de Redis para cache de dados de leitura frequente (ex: resumo do dashboard), visando diminuir a carga no banco de dados.
- **CI/CD:** Configuração de _pipelines_ (GitHub Actions) para automação de testes e build em cada _push_.
