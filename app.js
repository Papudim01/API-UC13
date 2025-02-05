import express from 'express';

// Importa as rotas
import carroRoutes from "./routes/carroRoutes.js";

// importar as rotas de usuário 
import usuarioRoutes from './routes/usuarioRoutes.js';

const app = express();

// Permite o express entender .JSON
app.use(express.json());

// Chama as rotas de carro (Estrutura completa do codigo)
app.use("/carros", carroRoutes);

// Chama as rotas do usuario
app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});