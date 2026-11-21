# REARepository
Um repositório contendo um material educativo envolvendo frameworks de programação.

## REA-Frameworks
Pasta com todos os arquivos principais do REA.

## ToDoList
Uma aplicação prática de lista de tarefas desenvolvida em Python utilizando o framework FastAPI e banco de dados SQLite para demonstrar os conceitos de CRUD.

## Como executar o projeto
Para rodar a aplicação localmente na sua máquina, siga os passos abaixo:

### 1. Instalar as dependências
Abra o terminal na pasta do projeto e execute o comando para instalar o FastAPI e o servidor Uvicorn:

```bash
pip install fastapi uvicorn
```

- **fastapi**: framework básico usado para a aplicação funcionar.
- **uvicorn**: servidor que vai gerenciar as requisições do frontend HTML.

### 2. Iniciar o servidor
Abra o terminal na pasta do projeto e execute o comando abaixo para iniciar o servidor:

```bash
uvicorn main:app --reload
```

Após isso basta abrir o arquivo HTML que a aplicação funcionará.

