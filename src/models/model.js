import connectToDatabase from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados

// Conecta ao banco de dados utilizando a string de conexão definida nas variáveis de ambiente
const conexao = await connectToDatabase(process.env.STRING_CONEXAO);

// Função para buscar todas as pizzas do banco de dados
export async function getTodosPizzas() {
    // Conecta ao banco de dados especificando o nome da base
    const db = conexao.db("Piza's_Pizzaria");
    // Seleciona a coleção "Pizzas" dentro da base de dados
    const colecao = db.collection("Pizzas");

    // Retorna um array contendo todos os documentos da coleção "Pizzas"
    return colecao.find().toArray();
};

// Função para buscar todas as bebidas do banco de dados
export async function getTodosBebidas() {
    // Conecta ao banco de dados especificando o nome da base
    const db = conexao.db("Piza's_Pizzaria");
    // Seleciona a coleção "Bebidas" dentro da base de dados
    const colecao = db.collection("Bebidas");

    // Retorna um array contendo todos os documentos da coleção "Bebidas"
    return colecao.find().toArray();
};

// Função para cadastrar uma nova pizza no banco de dados
export async function criarPizza(novaPizza) {
    // Conecta ao banco de dados especificando o nome da base
    const db = conexao.db("Piza's_Pizzaria");
    // Seleciona a coleção "Pizzas" dentro da base de dados
    const colecao = db.collection("Pizzas");

    // Insere um novo documento (pizza) na coleção e retorna o resultado da operação
    return colecao.insertOne(novaPizza);
};

// Função para cadastrar uma nova bebida no banco de dados
export async function criarBebida(novaBebida) {
    // Conecta ao banco de dados especificando o nome da base
    const db = conexao.db("Piza's_Pizzaria");
    // Seleciona a coleção "Bebidas" dentro da base de dados
    const colecao = db.collection("Bebidas");

    // Insere um novo documento (bebida) na coleção e retorna o resultado da operação
    return colecao.insertOne(novaBebida);
};
