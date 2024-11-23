import routes from "./src/routes/routes.js";
// Importa as dependências necessárias
import express from "express";

// Cria uma instância do Express
const app = express();

app.use(express.static('uploads'));

routes(app);


// Inicia o servidor na porta 3000
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
