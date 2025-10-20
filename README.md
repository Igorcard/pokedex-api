# Pokédex Backend

Este é o backend para a aplicação Pokédex, desenvolvido como parte do desafio Elevantial.

## Visão Geral

O backend é uma API RESTful construída com Node.js e Express. Ele gerencia os dados de Pokémons e seus tipos, armazenados em um banco de dados MongoDB. A API fornece endpoints para criar, ler, atualizar e excluir Pokémons e tipos.

## Vídeo de Demonstração

Disponível no link do drive:

- [VideoDemonstracao](https://drive.google.com/file/d/1M3Dn5iwTn_uSXlsKXhz3gmhUHamy51Ta/view?usp=sharing)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Instalação

1.  Clone o repositório:

    ```bash
    git clone <url-do-repositorio>
    cd pokedex
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente. Você pode usar o exemplo abaixo como base.

### Exemplo de `.env`

```env
# Configurações do Servidor
APP_PORT=50900

# Configurações do MongoDB
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=pokedex
DB_USERNAME=
DB_PASSWORD=

DB_POOL_MAX=10
DB_POOL_MIN=1

DB_AUTH_SOURCE=admin
DB_REPLICA_SET=
DB_TLS=false
DB_RETRY_WRITES=true
```

## Rodando a Aplicação

1.  **Inicie o MongoDB**: Certifique-se de que seu servidor MongoDB esteja em execução.

2.  **Execute as Migrações**: Para criar as coleções e inserir os dados iniciais no banco de dados, execute o seguinte comando:

    ```bash
    npx migrate-mongo up -f migrate-mongo-config.cjs
    ```

3.  **Inicie o Servidor**: Para iniciar o servidor de desenvolvimento, execute:
    ```bash
    npm run dev
    ```
    O servidor estará disponível em `http://localhost:50900`.

## Documentação da API (Swagger)

A documentação completa da API está disponível e pode ser acessada através do Swagger UI no seguinte endpoint:

- **URL**: [http://localhost:50900/pkx/api-docs](http://localhost:50900/pkx/api-docs)

## Resumo das Rotas da API

A API está prefixada com `/pkx`.

### Pokémons

- `GET /pokemons`: Retorna uma lista paginada de Pokémons. Aceita filtros por nome e tipo.
- `POST /pokemons`: Cria um novo Pokémon.
- `PUT /pokemons/{id}`: Atualiza um Pokémon existente.
- `POST /pokemons/{id}`: Exclui um Pokémon (deleção lógica).

### Tipos

- `GET /tipos`: Retorna a lista de todos os tipos de Pokémon.
- `POST /tipos`: Cria um novo tipo de Pokémon.
- `PUT /tipos/{id}`: Atualiza um tipo existente.
- `POST /tipos/{id}`: Exclui um tipo.

# Pokédex Frontend

## Rodando a Aplicação

1.  **Inicie a Página**: Para iniciar a pagina, execute em \frontend:
    ```bash
    npm start
    ```
    A página estará disponível em `http://localhost:3000`.
