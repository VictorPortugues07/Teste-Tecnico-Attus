# Attus - Sistema de Gestão de Incidentes

Plataforma moderna de monitoramento e controle de chamados técnicos, desenvolvida com foco em alta performance, usabilidade e arquitetura robusta.

---

# 📌 Sobre o Projeto

O **Attus** foi desenhado para simplificar a gestão de incidentes, oferecendo uma experiência de usuário imersiva através de uma interface responsiva e um back-end escalável.

O sistema permite o gerenciamento completo do ciclo de vida de um chamado através de um fluxo Kanban e garante consistência de dados em todas as operações.

---

# ✨ Funcionalidades Principais

* ✅ **Kanban Dinâmico**

  * Fluxo de chamados (*Aberto*, *Em Análise*, *Concluído*)
  * Suporte a drag-and-drop

* ✅ **CRUD Completo**

  * Criação, edição, visualização e exclusão de chamados
  * Validações robustas

* ✅ **UX/UI Imersiva**

  * Interface em Glassmorphism
  * Tema escuro
  * Transições fluidas
  * Responsividade adaptativa

* ✅ **Loading Inteligente**

  * Interceptadores globais para feedback visual em requisições assíncronas

* ✅ **Dashboard em Tempo Real**

  * Resumo consolidado de incidentes
  * Auxílio na tomada de decisão

---

# 🛠️ Tecnologias Utilizadas

## Back-end

* Java 21
* Spring Boot 3
* Lombok
* Spring Data JPA / Hibernate
* OpenAPI / Swagger
* JUnit 5
* Mockito

## Front-end

* Angular 18+ (Standalone Components)
* Angular Material
* Angular CDK Drag-Drop
* RxJS
* Jasmine
* Karma

---

# 🗄️ Configuração do Banco de Dados

Para que o projeto funcione, é necessário ter o PostgreSQL instalado e rodando em sua máquina.

## Criar o banco de dados

Abra o terminal SQL (ou pgAdmin/DBeaver) e execute:

```sql
CREATE DATABASE desafio_db;
```

---

# 🚀 Como Executar o Projeto

## 📋 Pré-requisitos

### Back-end

* Java JDK 21+
* Maven
* PostgreSQL 15+ (ou versão compatível)

### Front-end

* Node.js 20+
* npm
* Angular CLI (opcional, mas recomendado)

---

# ▶️ Executando o Back-end

Acesse a pasta do projeto:

```bash
cd desafiobackend
```

## Rodar o servidor

```bash
./mvnw spring-boot:run
```

## Executar testes automatizados

```bash
./mvnw test
```

---

# ▶️ Executando o Front-end

## Clone o repositório

```bash
git clone <link-do-seu-repositorio>
```

## Acesse a pasta do front-end

```bash
cd desafiofrontend
```

## Instale as dependências

Dentro da pasta do projeto, execute:

```bash
npm install
```

## Inicie o servidor de desenvolvimento

```bash
ng serve
```

## Executar testes unitários

```bash
ng test
```

## Acesse a aplicação

Abra o navegador em:

```txt
http://localhost:4200
```

---

# 📖 Documentação Técnica

Para mais detalhes sobre decisões arquiteturais, trade-offs e melhorias planejadas, consulte o arquivo:

```txt
ARCHITECTURE.md
```

---

# ✒️ Autor

## Victor Hugo De Pieri Justino

* 🐙 GitHub:

  * github.com/VictorPortugues07

* 💼 LinkedIn:

  * linkedin.com/in/victor-hugo-de-pieri-justino-bb487827a/

* 📧 Email:

  * [vdepierejustino@gmail.com](mailto:vdepierejustino@gmail.com)
