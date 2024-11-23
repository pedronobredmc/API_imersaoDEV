// Importa o MongoClient do módulo 'mongodb'.
// O MongoClient é usado para interagir com um banco de dados MongoDB.
import { MongoClient } from "mongodb";

// Exporta a função `connectToDatabase` como padrão.
// Essa função é responsável por conectar-se ao banco de dados MongoDB.
export default async function connectToDatabase(stringConexao) {
    let mongoClient; // Declara uma variável para armazenar a instância do MongoClient.
    
    try {
        // Inicializa o MongoClient com a string de conexão fornecida.
        mongoClient = new MongoClient(stringConexao);

        // Log informativo indicando o início do processo de conexão.
        console.log("Conectando ao banco de dados...");

        // Realiza a conexão com o banco de dados.
        await mongoClient.connect();

        // Log de sucesso após a conexão ser estabelecida.
        console.log("Conexão estabelecida com sucesso!");

        // Retorna a instância do MongoClient, que pode ser usada para interagir com o banco de dados.
        return mongoClient;
    } catch (error) {
        // Caso ocorra algum erro durante a conexão, exibe a mensagem de erro no console.
        console.error("Erro ao conectar no banco de dados!", error);

        // Encerra o processo Node.js com código de erro (1 - sinalizando falha).
        process.exit();
    }
}
