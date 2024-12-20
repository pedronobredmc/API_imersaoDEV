import multer from "multer"; // Importa o módulo multer para lidar com uploads de arquivos
import express from "express"; // Importa o módulo express para criar o servidor e gerenciar rotas
import { listarBebidas, listarPizzas, cadastrarBebida, cadastrarPizza, uploadImagemBebida, uploadImagemPizza, atualizaNovaBebida, atualizaNovaPizza} from "../controllers/controller.js"; // Importa as funções do controlador
import cors from "cors"; // Importa o módulo cors para habilitar o CORS

const corsOptions = {
    origin: "http://localhost:8000",// Define as opções de CORS para permitir apenas requisições do localhost do fronted na porta 8000
    optionSuccessStatus: 200 // Define o status de sucesso para requisições CORS
}; 

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
    // Habilita o CORS com as opções definidas acima 6-9 para permitir requisições do frontend
    app.use(cors(corsOptions));

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

    // Rota para atualizar as informações de uma bebida, incluindo nome, preço, descrição e imagem
    // O ID da bebida é passado como parâmetro na URL e a função 'atualizaNovaBebida' é chamada para processar a requisição
    app.put('/uploadbebida/:id', atualizaNovaBebida);

    // Rota para atualizar as informações de uma pizza, incluindo sabor, preço, descrição e imagem
    // O ID da pizza é passado como parâmetro na URL e a função 'atualizaNovaPizza' é chamada para processar a requisição
    app.put('/uploadpizza/:id', atualizaNovaPizza);

};

// Exporta a função de rotas para ser usada em outros arquivos
export default routes;
