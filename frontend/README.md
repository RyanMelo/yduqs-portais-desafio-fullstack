# YDUQS Portal

Pagina para formulário de matrícula, construído com [Next.js](https://nextjs.org).

## Começando

Siga estas instruções para configurar e executar o ambiente de desenvolvimento.

### 1. Configure as Variáveis de Ambiente

Primeiro, você precisa configurar as variáveis de ambiente. Copie o arquivo de exemplo para um novo arquivo `.env` na raiz do projeto.

```bash
cp .env.example .env
```

Em seguida, abra o arquivo `.env` e certifique-se de que a `API_URL` está apontando para o endereço correto do backend.

```
API_URL=http://localhost:3001
```

### 2. Instale as Dependências

Este projeto usa [Yarn](https://yarnpkg.com) como gerenciador de pacotes. Para instalar as dependências necessárias, execute:

```bash
yarn install
```

### 3. Execute o Servidor de Desenvolvimento

Com as dependências instaladas, você pode iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

Isso iniciará a aplicação com [Turbopack](https://turbo.build/pack) para um desenvolvimento mais rápido. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

O projeto segue uma estrutura orientada a funcionalidades dentro do diretório `src`, organizada da seguinte forma:

-   **/src/app/**: Contém as páginas principais da aplicação, layouts e rotas, seguindo a convenção do App Router do Next.js.
-   **/src/components/**: Abriga componentes React reutilizáveis usados em toda a aplicação, como cards, formulários e elementos de UI.
-   **/src/actions/**: Contém actions do lado do servidor, usadas principalmente para lidar com submissões de formulários e mutações.
-   **/src/store/**: Contém a lógica de gerenciamento de estado, implementada com [Zustand](https://github.com/pmndrs/zustand).
-   **/src/utils/**: Um diretório para funções utilitárias, incluindo máscaras de entrada, lógica de validação e outros auxiliares.
-   **/src/theme.ts**: Define o tema da aplicação usando [Material-UI (MUI)](https://mui.com/).
-   **/public/**: Armazena ativos estáticos como imagens, logotipos e ícones que são servidos diretamente.

## Tecnologias Utilizadas

-   **Framework**: [Next.js](https://nextjs.org)
-   **Linguagem**: [TypeScript](https://www.typescriptlang.org)
-   **UI**: [Material-UI (MUI)](https://mui.com/)
-   **Gerenciamento de Estado**: [Zustand](https://github.com/pmndrs/zustand)
-   **Formulários**: [React Hook Form](https://react-hook-form.com)
-   **Validação de Schema**: [Zod](https://zod.dev)
-   **Linting**: [ESLint](https://eslint.org)

## Scripts Disponíveis

-   `yarn dev`: Inicia o servidor de desenvolvimento com Turbopack.
-   `yarn build`: Cria uma build da aplicação pronta para produção.
-   `yarn start`: Inicia o servidor de produção.
-   `yarn lint`: Executa o linter no código para verificar erros e problemas de estilo.
