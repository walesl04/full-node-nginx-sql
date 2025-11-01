## Projeto com Node.js, Nginx e MySQL (via Docker Compose)

Este projeto utiliza **Docker Compose** para orquestrar um ambiente de desenvolvimento com **Node.js**, **Nginx** e **MySQL**.

---

## Estrutura dos Serviços

| Serviço | Imagem base | Descrição |
|----------|--------------|------------|
| **app** | node:22 | Aplicação Node.js principal (API / backend). |
| **nginx** | nginx:latest | Servidor web que faz o proxy reverso para o app Node.js. |
| **db** | mysql:latest | Banco de dados MySQL. |

---

## Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Subindo o ambiente

Com tudo instalado, basta executar:

```bash
docker compose up -d
```


> Após executar o docker compose, acessar via http://localhost:8080