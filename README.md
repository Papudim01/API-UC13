# API de carros - webapi

Esta é uma API em construção, que será uma API RESTful desenvolvida para o gerenciamento de informações de carros, utilizando 
**Node.js** e **Express**. A API permite criar, ler, atualizar e excluir carros, com validaçaõ dos dados utilizando a 
biblioteca **joi**.

Este é um projeto de crud (create, Read, Update, Delete), que será expandido no futuro. Este é apenas o escopo inicial.

## Funcionalidades 

- **GET /**: Retorna a lista completa de carro.
- **GET /:sigla**: Retorna as informações de um carro especifico, identificando pelo sigla.
- **POST /**: adiciona um novo carro á lista.
- **PUT /:sigla**: Atualiza as informaçoes de um carro especifico, identificando pela sigla.
- **DELETE /:sigla**: Remove um carro especifico pela sigla.

## Estrutura inicial do projeto 
- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **tabela.js**: Contém a lista de carros (dados fictício)
- **validação.js**: contém as validações Joi para os dados dos carros.

## Tecnologia Usadas 

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para construção de API REST.
- **Joi**: Biblioteca para validação de dados.

## Endpoints
### 1. **GET /**

Retorna a lista completa de carros disponiveis 

#### Exemplo de resposta:
```json
[
    {
        "nome": "Ferrari",
        "sigla": "FER",
        "velocidadeMaxima": "340",
        "potencia": "800",
        "consumo": "5.5",
    },
    {
        "nome": "Lamborghini",
        "sigla": "LAM",
        "velocidadeMaxima": "355",
        "potencia": "770",
        "consumo": "6.2",
    }
]

```

## Como Rodar o projeto 

1. **clone este repositorio:**

    ```bash
        git clone https://github.com/Papudim01/API-UC13.git
    ```
2. **Instale as dependencias:**
    navegue até o diretorio do projeto e execute o comando:

    ```bash 
    npm install
    ```


3. **inicie o servidor :**

    Após a instalação das dependencias, inice o servidor:

    ```bash
    node ./app.js
    ```

4. **Acesse a API:**

   A API estará disponível em [http://localhost:3000](http://localhost:3000). 