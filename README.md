
# 📌 BookStack API || API livros

O projeto consiste em um sistema para gerenciar os livros que temos em casa, onde a pessoa poderá cadastrar, editar, excluir e listar todos os livros cadastrados.

 


## 📌 Instalação

1.Primeiro faça um fork e depois um clone do repoistório

```bash
  git clone https://github.com/usuario/projeto.git
  cd my-project
```

2.Instale as dependências

```bash
  npm install
```

3.Configuração do Banco de Dados: Cheque que você tem uma instância do MongoDB em execução. Crie um arquivo .env na raiz do projeto e configure a URL de conexão com o MongoDB:

```bash
  MONGODB_URL=sua-string-de-conexao
```
4.Inicie o servidor
```bash
  npm run dev
```

## 📌 Funcionalidades

Esta API possui as seguintes funcionalidades:
  - **Listar livros** - Visualizar todas os livros cadastrados.
  - **Adicionar livro** - Cadastra um novo livro com os atributos: id, nome, autor(a) e categoria.
  - **Editar/Atualizar livro** - Atualizar e alterar informações sobre uma livro específico.
  - **Deletar livro** - Apagar um livro do banco de dados.
    
