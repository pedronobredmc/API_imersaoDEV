# 🍕 **Piza's Pizzaria API**  

Este projeto foi desenvolvido durante o Curso de Imersão Dev Backend da Alura e tem como objetivo criar uma API para gerenciar o catálogo de pizzas e bebidas de uma pizzaria fictícia chamada Piza's Pizzaria.

A API permite listar, cadastrar, atualizar e gerenciar pizzas e bebidas, além de realizar upload de imagens de produtos.

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
1. Listar Produtos

    GET /pizzas: Retorna uma lista de todas as pizzas cadastradas.
    GET /bebidas: Retorna uma lista de todas as bebidas cadastradas.

2. Cadastrar Produtos

    POST /pizzas: Permite cadastrar uma nova pizza enviando os dados no corpo da requisição.
    POST /bebidas: Permite cadastrar uma nova bebida enviando os dados no corpo da requisição.

3. Atualizar Produtos

    PUT /pizzas/:id: Permite atualizar as informações de uma pizza, incluindo seu sabor, preço e imagem. Exemplo de JSON:

{
  "sabor": "Calabresa",
  "preco": 45.90
}

PUT /bebidas/:id: Permite atualizar as informações de uma bebida, incluindo seu nome, preço e imagem. Exemplo de JSON:

    {
      "nome": "Suco de Uva",
      "preco": 7.50
    }

    Durante o processo de atualização, a descrição do produto é gerada automaticamente com base na imagem enviada.

4. Upload de Imagens

    POST /upload: Permite enviar uma imagem para ser associada a uma nova bebida ou pizza.

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

#### **GET /pizzas**
Retorna uma lista de todas as pizzas cadastradas.

#### **POST /pizzas**
Cadastra uma nova pizza.  
Exemplo de JSON no corpo da requisição:
```
{
  "sabor": "Pepperoni",
  "preco": 39.99
}
```

#### **PUT /uploadpizza/:id**
Atualiza as informações de uma pizza existente, incluindo sabor, preço e imagem.  
A imagem deve ser enviada no corpo da requisição no campo `imagem`.  
Exemplo de JSON para os demais campos:
```
{
  "sabor": "Frango com Catupiry",
  "preco": 40.00
}
```

#### **POST /uploadpizza**
Permite fazer upload de uma imagem para uma nova pizza.  
A imagem deve ser enviada como `multipart/form-data` no campo `imagem`.

---

### **Bebidas**

#### **GET /bebidas**
Retorna uma lista de todas as bebidas cadastradas.

#### **POST /bebidas**
Cadastra uma nova bebida.  
Exemplo de JSON no corpo da requisição:
```json
{
  "nome": "Refrigerante",
  "preco": 5.99
}
```

#### **PUT /uploadbebida/:id**
Atualiza as informações de uma bebida existente, incluindo nome, preço e imagem.  
A imagem deve ser enviada no corpo da requisição no campo `imagem`.  
Exemplo de JSON para os demais campos:
```
{
  "nome": "Suco de Uva",
  "preco": 7.50
}
```

#### **POST /uploadbebida**
Permite fazer upload de uma imagem para uma nova bebida.  
A imagem deve ser enviada como `multipart/form-data` no campo `imagem`.

---

### **Resumo das Rotas**
```

| Método | Caminho               | Descrição                              |
|--------|-----------------------|----------------------------------------|
| GET    | /pizzas               | Retorna todas as pizzas                |
| POST   | /pizzas               | Cadastra uma nova pizza                |
| PUT    | /uploadpizza/:id      | Atualiza uma pizza existente           |
| POST   | /uploadpizza          | Faz upload de imagem para nova pizza   |
| GET    | /bebidas              | Retorna todas as bebidas               |
| POST   | /bebidas              | Cadastra uma nova bebida               |
| PUT    | /uploadbebida/:id     | Atualiza uma bebida existente          |
| POST   | /uploadbebida         | Faz upload de imagem para nova bebida  |
```

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
