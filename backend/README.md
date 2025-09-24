# YDUQS API

Api desenvolvida para formulário de matrícula. Este é o projeto backend construído com [NestJS](https://nestjs.com/) e [Prisma](https://www.prisma.io/).

## Como executar o projeto

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento local.

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

### 2. Instalação das dependências

Clone o repositório e instale as dependências do projeto:

```bash
$ yarn install
```

### 3. Configuração do ambiente

Copie o arquivo de exemplo `.env.example` para um novo arquivo chamado `.env` e, se necessário, ajuste as variáveis de ambiente para o seu banco de dados.

```bash
$ cp .env.example .env
```

### 4. Banco de dados

Para subir o container do banco de dados PostgreSQL, execute o comando abaixo. O serviço ficará disponível na porta `5432`.

```bash
$ docker-compose up -d
```

### 5. Migrations

Com o banco de dados em execução, aplique as migrations para criar as tabelas e estruturas necessárias:

```bash
$ npx prisma migrate dev
```

### 6. Executando a aplicação

Para iniciar a aplicação em modo de desenvolvimento com watch mode, execute:

```bash
$ yarn run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Arquitetura do Projeto

O projeto segue a arquitetura modular padrão do NestJS, projetada para ser escalável e de fácil manutenção.

- **`src/main.ts`**: Ponto de entrada da aplicação.
- **`src/app.module.ts`**: Módulo raiz da aplicação.
- **`src/prisma.service.ts`**: Serviço que encapsula a instância do cliente Prisma para ser injetado em outros serviços.
- **`src/enrollment/`**: Módulo de `enrollment` (matrícula), que contém toda a lógica de negócio relacionada a matrículas.
    - **`enrollment.module.ts`**: Define o módulo `enrollment`.
    - **`enrollment.controller.ts`**: Responsável por lidar com as requisições HTTP e definir as rotas da API para matrículas.
    - **`enrollment.service.ts`**: Contém a lógica de negócio principal para as operações de matrícula.
    - **`enrollment.repository.ts`**: Camada de abstração para o acesso ao banco de dados, utilizando o Prisma para realizar as operações de CRUD.
    - **`create-enrollment.dto.ts`**: Data Transfer Object (DTO) que define a estrutura dos dados esperados ao criar uma nova matrícula.

## Testes

O projeto possui testes unitários e end-to-end para garantir a qualidade e o correto funcionamento do código.

### Testes Unitários

Para executar os testes unitários, utilize o comando:

```bash
$ yarn run test
```

### Testes End-to-End (E2E)

Para executar os testes E2E, que simulam o uso real da API, utilize o comando:

```bash
$ yarn run test:e2e
```
