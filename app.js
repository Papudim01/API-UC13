import carros2025 from "./tabelaCarros.js";
import express from "express";
import { modeloCarro, modeloAtualizacaoCarro } from "./validacao.js"; // Adicionei o modeloAtualizacao importado
 
const app = express();
 
// Configura o Express para entender requisições com o corpo em formato JSON
app.use(express.json());
 
// Define uma rota GET no caminho '/' que irá retornar a lista completa de carros
app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2025); // Retorna lista de carros com status 200
});
 
app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); // Obtém a sigla e deixa Maiúscula
    const carro = carros2025.find((infoCarro) => infoCarro.sigla === siglaInformada); // Busca o carro pela sigla
 
    if (!carro) {
        res.status(404).send("Não existe carro com a sigla informada!"); // Se não encontrar o carro
        return;
    }
    res.status(200).send(carro); // Retorna o carro com status 200
});
 
// app.post('/', (req, res) => {
//     const novoCarro = req.body; // Obtém o novo carro enviado no corpo da requisição
//     const { error } = modeloCarro.validate(novoCarro); // Valida os dados do novo carro
 
//     if (error) {
//         res.status(400).send(error.details[0].message); // Se houver erro de validação, retorna erro 400
//         return;
//     }
 
//     carros2025.push(novoCarro); // Adiciona o novo carro à lista
//     res.status(201).send(novoCarro); // Retorna o carro adicionado com status 201 (Criado)
// });

app.post('/', (req, res) => {
    const novoCarro = req.body;
    const carroExiste = carros2025.find(carro => carro.sigla === novoCarro.sigla);
    if (carroExiste) {
        return res.status(404).send('já existe um carro cadastrado com essa sigla');
    }
    const { error } = modeloCarro.validate(novoCarro);
    if ( error ) {
        res.status(404).send(error);
        return;
    }
    carros2025.push(novoCarro);
    res.status(201).send(novoCarro);
});

app.put('/sigla/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); // Obtém a sigla da URL
    const carroSelecionado = carros2025.find((c) => c.sigla === siglaInformada); // Busca o carro pela sigla
 
    if (!carroSelecionado) {
        res.status(404).send("Não existe um carro com a sigla informada"); // Se não encontrar o carro
        return;
    }
 
    // Valida os dados da requisição com o modelo da atualização
    const { error } = modeloAtualizacaoCarro.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message); // Se houver erro de validação, retorna erro 400
        return;
    }
 
    // Atualizando os campos do carro selecionado com os dados da requisição
    const campos = Object.keys(req.body);
    for (let campo of campos) {
        carroSelecionado[campo] = req.body[campo];
    }
 
    res.status(200).send(carroSelecionado); // Retorna o carro atualizado
});

app.delete("/:sigla", (req,res) => {
    const siglainformada = req.params.sigla.toUpperCase();
    const IndiceCarroSelecionado = carros2025.findIndex(
        (c) => c.sigla === siglainformada);
    if (IndiceCarroSelecionado === -1) {
        res.status(404).send("Não existe um carro com a silga informada");
        return;
    }
    const carroRemovido = carros2025.splice(IndiceCarroSelecionado, 1);
    res.status(200).send(carroRemovido);
});

// Define a porta do servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});