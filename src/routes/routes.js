import multer from "multer"; // Importa o módulo multer para lidar com uploads de arquivos
import express from "express"; // Importa o módulo express para criar o servidor e gerenciar rotas
import { listarBebidas, listarPizzas, cadastrarBebida, cadastrarPizza, uploadImagemBebida, uploadImagemPizza, atualizaNovaBebida, atualizaNovaPizza} from "../controllers/controller.js"; // Importa as funções do controlador

// Configuração do armazenamento de arquivos para uploads
const storage = multer.diskStorage({
    // Define o destino onde os arquivos serão armazenados
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Diretório "uploads/" será usado para salvar os arquivos
    },
    // Define o nome do arquivo que será salvo no servidor
    filename: function (req, file, cb) {
        cb(null, file.originalname); // O nome original do arquivo será mantido
    }
});

// Cria uma instância do multer com as configurações de destino e armazenamento
const upload = multer({ 
    dest: "./uploads", // Define o diretório base para os arquivos temporários
    storage // Usa a configuração personalizada de armazenamento definida acima
});

// Função para definir as rotas da aplicação
const routes = (app) => {
    // Habilita o middleware para lidar com requisições JSON no express
    app.use(express.json());

    // Rota para buscar todas as pizzas
    app.get('/pizzas', listarPizzas); 
    // Quando uma requisição GET for feita no caminho '/pizzas', a função listarPizzas será executada

    // Rota para buscar todas as bebidas
    app.get('/bebidas', listarBebidas); 
    // Quando uma requisição GET for feita no caminho '/bebidas', a função listarBebidas será executada

    // Rota para cadastrar novas pizzas
    app.post('/pizzas', cadastrarPizza); 
    // Quando uma requisição POST for feita no caminho '/pizzas', a função cadastrarPizza será executada

    // Rota para cadastrar novas bebidas
    app.post('/bebidas', cadastrarBebida); 
    // Quando uma requisição POST for feita no caminho '/bebidas', a função cadastrarBebida será executada

    // Rota para fazer upload de imagens
    app.post('/uploadbebida', upload.single("imagem"), uploadImagemBebida); 
    // Quando uma requisição POST for feita no caminho '/upload', 
    // o middleware do multer (upload.single) será executado para processar o arquivo enviado, 
    // seguido pela função uploadImagem para lidar com a lógica do upload

    // Rota para fazer upload de imagens
    app.post('/uploadpizza', upload.single("imagem"), uploadImagemPizza); 
    // Quando uma requisição POST for feita no caminho '/upload', 
    // o middleware do multer (upload.single) será executado para processar o arquivo enviado, 
    // seguido pela função uploadImagem para lidar com a lógica do upload

    app.put('/uploadbebida/:id', atualizaNovaBebida);

    app.put('/uploadpizza/:id', atualizaNovaPizza);
};

// Exporta a função de rotas para ser usada em outros arquivos
export default routes;
