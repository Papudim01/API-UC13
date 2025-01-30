import express from 'express';

const app = express();

// Permite o express entender .JSON
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});