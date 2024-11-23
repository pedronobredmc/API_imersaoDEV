# 🍕 **Piza's Pizzaria API**  

Este projeto foi desenvolvido durante o **Curso de Imersão Dev Backend da Alura** e tem como objetivo criar uma API para gerenciar o catálogo de pizzas e bebidas de uma pizzaria fictícia chamada *Piza's Pizzaria*.  

A API permite listar, cadastrar e gerenciar pizzas e bebidas, além de realizar upload de imagens de produtos.  

---

## **🛠️ Tecnologias Utilizadas**
- **Node.js**: Plataforma para execução do JavaScript no backend.  
- **Express**: Framework para construção de APIs REST.  
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações de pizzas e bebidas.  
- **Multer**: Middleware para gerenciar upload de arquivos.  
- **Dotenv**: Gerenciamento de variáveis de ambiente.  

---

## **📁 Estrutura do Projeto**
```
Piza's Pizzaria API
├── config/
│   └── dbConfig.js  # Configuração da conexão com o banco de dados
├── controllers/
│   └── controller.js  # Lógica de manipulação das requisições
├── models/
│   └── model.js  # Interações com o banco de dados
├── routes/
│   └── routes.js  # Definição das rotas da API
├── uploads/  # Pasta para armazenar imagens enviadas
├── .env  # Variáveis de ambiente (não incluído no repositório)
├── package.json  # Dependências e scripts do projeto
└── README.md  # Documentação do projeto
```

---

## **🚀 Funcionalidades**
1. **Listar Produtos**  
   - **GET /pizzas**: Retorna uma lista de todas as pizzas cadastradas.  
   - **GET /bebidas**: Retorna uma lista de todas as bebidas cadastradas.  

2. **Cadastrar Produtos**  
   - **POST /pizzas**: Permite cadastrar uma nova pizza enviando os dados no corpo da requisição.  
   - **POST /bebidas**: Permite cadastrar uma nova bebida enviando os dados no corpo da requisição.  

3. **Upload de Imagens**  
   - **POST /upload**: Permite enviar uma imagem para ser associada a uma nova bebida.  

---

## **📦 Como Executar o Projeto**

### **1. Pré-requisitos**
Certifique-se de ter instalado:  
- Node.js  
- MongoDB  

### **2. Instalação**
1. Clone este repositório:  
   ```bash
   git clone https://github.com/seu-usuario/pizzaria-api.git
   cd pizzaria-api
   ```
2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:  
   Crie um arquivo `.env` na raiz do projeto com a seguinte variável:  
   ```env
   STRING_CONEXAO=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net
   ```

4. Inicie o servidor:  
   ```bash
   npm start
   ```
   O servidor estará disponível em `http://localhost:3000`.

---

## **🛠️ Endpoints**

### **Pizzas**
- **GET /pizzas**  
  Retorna todas as pizzas cadastradas.

- **POST /pizzas**  
  Cadastra uma nova pizza. Exemplo de JSON:  
  ```json
  {
    "nome": "Pepperoni",
    "preco": 39.99
  }
  ```

### **Bebidas**
- **GET /bebidas**  
  Retorna todas as bebidas cadastradas.

- **POST /bebidas**  
  Cadastra uma nova bebida. Exemplo de JSON:  
  ```json
  {
    "nome": "Refrigerante",
    "preco": 5.99
  }
  ```

### **Upload de Imagens**
- **POST /upload**  
  Permite fazer upload de imagens enviando um arquivo no campo `imagem`.  

---

## **🌟 Aprendizados**
Durante o desenvolvimento deste projeto, aprendemos:  
- A criar APIs REST utilizando **Express**.  
- A conectar um banco de dados MongoDB com **Node.js**.  
- A gerenciar upload de arquivos com **Multer**.  
- A estruturar e organizar um projeto backend de forma escalável.  

---

## **📄 Licença**
Este projeto é apenas para fins educacionais e não possui licença específica.  

--- 

## **📞 Contato**
Em caso de dúvidas ou sugestões, sinta-se à vontade para entrar em contato!  
- **Alura Cursos**: [Site Oficial](https://www.alura.com.br)  

---  

**Divirta-se explorando o backend da Piza's Pizzaria! 🍕**
