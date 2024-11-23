import fs from "fs"; // Importa o módulo "fs" para manipulação de arquivos
import { getTodosPizzas, getTodosBebidas, criarPizza, criarBebida } from "../models/model.js"; // Importa funções do modelo para interagir com o banco de dados

// Função para listar todas as pizzas do banco de dados
export async function listarPizzas(req, res) {
    // Chama a função que busca todas as pizzas no banco de dados
    const resultado = await getTodosPizzas();
    // Envia o resultado obtido como resposta no formato JSON com o código HTTP 200 (OK)
    res.status(200).json(resultado);
};

// Função para listar todas as bebidas do banco de dados
export async function listarBebidas(req, res) {
    // Chama a função que busca todas as bebidas no banco de dados
    const resultado = await getTodosBebidas();
    // Envia o resultado obtido como resposta no formato JSON com o código HTTP 200 (OK)
    res.status(200).json(resultado);
};

// Função para cadastrar uma nova pizza no banco de dados
export async function cadastrarPizza(req, res) {
    // Obtém os dados da nova pizza do corpo da requisição (req.body)
    const novaPizza = req.body;
    try {
        // Insere a nova pizza no banco de dados chamando a função do modelo
        const pizzaCriada = await criarPizza(novaPizza);
        // Envia a pizza criada como resposta no formato JSON com o código HTTP 201 (Created)
        res.status(201).json(pizzaCriada);
    } catch (erro) {
        // Em caso de erro, registra a mensagem no console e retorna erro 500 (Internal Server Error)
        console.error(erro.message);
        res.status(500).send("Erro ao cadastrar pizza");
    }
};

// Função para cadastrar uma nova bebida no banco de dados
export async function cadastrarBebida(req, res) {
    // Obtém os dados da nova bebida do corpo da requisição (req.body)
    const novaBebida = req.body;
    try {
        // Insere a nova bebida no banco de dados chamando a função do modelo
        const bebidaCriada = await criarBebida(novaBebida);
        // Envia a bebida criada como resposta no formato JSON com o código HTTP 201 (Created)
        res.status(201).json(bebidaCriada);
    } catch (erro) {
        // Em caso de erro, registra a mensagem no console e retorna erro 500 (Internal Server Error)
        console.error(erro.message);
        res.status(500).send("Erro ao cadastrar bebida");
    }
};

// Função para fazer upload de uma imagem de bebida e registrar no banco de dados
export async function uploadImagem(req, res) {
    // Cria um objeto de nova bebida com dados iniciais e o nome do arquivo de imagem carregado
    const novaBebida = {
        nome: "",
        preco: 0,
        imagem: req.file.originalname
    };
    try {
        // Insere a nova bebida no banco de dados com os dados básicos e a imagem
        const bebidaCriada = await criarBebida(novaBebida);
        // Renomeia o arquivo de imagem carregado para associá-lo ao ID do item no banco
        const imagemAtualizada = `uploads/${bebidaCriada.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        // Envia a bebida criada como resposta no formato JSON com o código HTTP 201 (Created)
        res.status(201).json(bebidaCriada);
    } catch (erro) {
        // Em caso de erro, registra a mensagem no console e retorna erro 500 (Internal Server Error)
        console.error(erro.message);
        res.status(500).send("Erro ao cadastrar bebida");
    }
};
