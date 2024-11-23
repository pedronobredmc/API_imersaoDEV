import fs from "fs"; // Importa o módulo "fs" para manipulação de arquivos
import { getTodosPizzas, getTodosBebidas, criarPizza, criarBebida, atualizarBebida, atualizarPizza} from "../models/model.js"; // Importa funções do modelo para interagir com o banco de dados
import gerarDescricaoComGemini from "../services/geminiService.js"; // Importa a função para gerar descrições de imagens com o Gemini
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
export async function uploadImagemBebida(req, res) {
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

export async function uploadImagemPizza(req, res) {
    // Cria um objeto de nova pizza com dados iniciais e o nome do arquivo de imagem carregado
    const novaPizza = {
        nome: "",
        preco: 0,
        imagem: req.file.originalname
    };
    try {
        // Insere a nova pizza no banco de dados com os dados básicos e a imagem
        const pizzaCriada = await criarPizza(novaPizza);
        // Renomeia o arquivo de imagem carregado para associá-lo ao ID do item no banco
        const imagemAtualizada = `uploads/${pizzaCriada.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        // Envia a pizza criada como resposta no formato JSON com o código HTTP 201 (Created)
        res.status(201).json(pizzaCriada);
    } catch (erro) {
        // Em caso de erro, registra a mensagem no console e retorna erro 500 (Internal Server Error)
        console.error(erro.message);
        res.status(500).send("Erro ao cadastrar pizza");
    }
};

export async function atualizaNovaBebida(req, res) {
    // Obtém o ID da bebida a ser atualizada a partir dos parâmetros da requisição
    const id = req.params.id;

    // Define a URL da imagem com base no ID da bebida
    const urlImagem = `http://localhost:3000/${id}.png`;

    try {
        // Lê o arquivo de imagem associado ao ID da bebida no diretório de uploads
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);

        // Gera uma descrição da bebida utilizando a imagem lida, com ajuda de uma função externa
        const descricao = await gerarDescricaoComGemini(imageBuffer);

        // Cria um objeto com os dados atualizados da bebida, incluindo nome, preço, descrição gerada e URL da foto
        const novaBebida = {
            nome: req.body.nome, // Obtém o nome da bebida a partir do corpo da requisição
            preco: req.body.preco, // Obtém o preço da bebida a partir do corpo da requisição
            descricao: descricao,  // Adiciona a descrição gerada
            foto: urlImagem        // Adiciona a URL da foto
        };

        // Atualiza os dados da bebida no banco de dados utilizando uma função externa
        const bebidaAtualizada = await atualizarBebida(id, novaBebida);

        // Retorna a bebida atualizada no formato JSON com o código HTTP 201 (Created)
        res.status(201).json(bebidaAtualizada);
    } catch (erro) {
        // Em caso de erro, exibe a mensagem no console para depuração
        console.error(erro.message);

        // Retorna um código HTTP 500 (Internal Server Error) com uma mensagem de erro
        res.status(500).send("Erro ao cadastrar bebida");
    }
};



export async function atualizaNovaPizza(req, res) {
    // Obtém o ID da pizza a ser atualizada a partir dos parâmetros da requisição
    const id = req.params.id;

    // Define a URL da imagem com base no ID da pizza
    const urlImagem = `http://localhost:3000/${id}.png`;

    try {
        // Lê o arquivo de imagem associado ao ID da pizza do diretório de uploads
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);

        // Gera uma descrição da pizza utilizando a imagem lida, com ajuda de uma função externa
        const descricao = await gerarDescricaoComGemini(imageBuffer);

        // Cria um objeto com os dados atualizados da pizza, incluindo sabor, preço, descrição gerada e URL da foto
        const novaPizza = {
            sabor: req.body.sabor, // Obtém o sabor da pizza a partir do corpo da requisição
            preco: req.body.preco, // Obtém o preço da pizza a partir do corpo da requisição
            descricao: descricao,  // Adiciona a descrição gerada
            foto: urlImagem        // Adiciona a URL da foto
        };

        // Atualiza os dados da pizza no banco de dados utilizando uma função externa
        const pizzaCriada = await atualizarPizza(id, novaPizza);

        // Retorna a pizza atualizada no formato JSON com o código HTTP 201 (Created)
        res.status(201).json(pizzaCriada);
    } catch (erro) {
        // Em caso de erro, exibe a mensagem no console para depuração
        console.error(erro.message);

        // Retorna um código HTTP 500 (Internal Server Error) com uma mensagem de erro
        res.status(500).send("Erro ao cadastrar pizza");
    }
};