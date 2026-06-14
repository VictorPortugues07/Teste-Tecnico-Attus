# Attus - Sistema de Gestão de Incidentes

Plataforma moderna de monitoramento e controle de chamados técnicos, desenvolvida com foco em alta performance, usabilidade e arquitetura robusta.

## Sobre o Projeto

O Attus foi desenhado para simplificar a gestão de incidentes, oferecendo uma experiência de usuário imersiva através de uma interface responsiva e um back-end escalável. O sistema permite o gerenciamento completo do ciclo de vida de um chamado (Kanban) e garante consistência de dados em todas as operações.

## ✨ Funcionalidades Principais

- **Kanban Dinâmico:** Fluxo de chamados (Aberto, Em Análise, Concluído) com suporte a _drag-and-drop_.
- **CRUD Completo:** Criação, edição, visualização e exclusão de chamados com validações robustas.
- **UX/UI Imersiva:** Interface em _Glassmorphism_ com tema escuro, transições fluidas e responsividade adaptativa.
- **Loading Inteligente:** Interceptadores (Interceptors) globais para feedback visual em requisições assíncronas.
- **Dashboard em Tempo Real:** Resumo consolidado de incidentes para auxílio na tomada de decisão.

## 🛠️ Tecnologias Utilizadas

### Back-end

- **Java 21** & **Spring Boot 3**
- **Lombok** (para otimização de código)
- **Spring Data JPA / Hibernate**
- **OpenAPI/Swagger** (Documentação de API)
- **Testes:** JUnit 5 & Mockito

### Front-end

- **Angular 18+** (Standalone Components)
- **Angular Material** (UI Components & CDK Drag-Drop)
- **RxJS** (Programação reativa)
- **Testes:** Jasmine & Karma

---

## 🗄️ Configuração do Banco de Dados

Para que o projeto funcione, é necessário ter o **PostgreSQL** instalado e rodando em sua máquina.

1. **Crie o banco de dados:**
   Abra o seu terminal SQL (ou pgAdmin/DBeaver) e execute o comando:

```sql
   CREATE DATABASE desafio_db;
```

## 🚀 Como Executar

### Pré-requisitos

- Java JDK 21+
- Node.js 18+
- Maven
- **PostgreSQL 15+** (ou versão compatível)

### Back-end

```bash
cd desafiobackend

# Para rodar o servidor
./mvnw spring-boot:run

# Para executar os testes automatizados
./mvnw test
```

### Front-end

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
ng serve

# Executar testes unitários
ng test
```

## 📖 Documentação Técnica

Para mais detalhes sobre as decisões arquiteturais, trade-offs e melhorias planejadas, consulte o nosso [ARCHITECTURE.md](./ARCHITECTURE.md).

## ✒️ Autor

**Victor Hugo De Pieri Justino**

- 🐙 [GitHub: github.com/VictorPortugues07](https://github.com/VictorPortugues07)
- 💼 [LinkedIn: linkedin.com/in/victor-hugo-de-pieri-justino-bb487827a/](https://www.linkedin.com/in/victor-hugo-de-pieri-justino-bb487827a/)
- 📧 [Email: vdepierejustino@gmail.com](mailto:vdepierejustino@gmail.com)
