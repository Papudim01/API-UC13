let carros2025 = [
    {
        nome: 'Ferrari',
        sigla: 'FER',
        velocidadeMaxima: '340',
        potencia: 800,
        consumo: 5.5,
    },
    {
        nome: 'Lamborghini',
        sigla: 'LAM',
        velocidadeMaxima: 355,
        potencia: 770,
        consumo:6.2,
    },
];

// função que retorna todos os carros no array 
export const getALLCarros = () => carros2025;

// Função que retorna um carro especifico  pela identificador (sigla)
export const getCarroBysigla = (sigla) => {
    return carros2025.find(carro => carro.sigla === sigla);
};

// Função que adiciona um carro novo ao array
export const createCarro = (novoCarro) => {
    carros2025.push(novoCarro); // Adiciona o novo carro ao final da lista
    return novoCarro;
};

// Função que atualiza as informações de um carro existente, com base na sigla 
export const updateCarro = (sigla, dadosAtualizado) => {
    // Busca o índice do carro no array 
    const carroindex = carros2025.findIndex(carro => carro.sigla ===sigla);
    if (carroindex === -1) return null; //Se não encontrar carro retorna Null
    // Atualiza o carro com as informaçoes fornecidas
    carros2025[carroindex] = { ...carros2025[carroindex], ...dadosAtualizado};
    return carros2025[carroindex];
};

// Função que remove um carro do array, com base na sigla
export const deleteCarro = (sigla) => {
    // Busca o indice do carro no array usando a sigla 
    const carroindex = carros2025.findIndex((carro) => carro.sigla === sigla);
    if (carroindex === -1) return null;
    // remove o carro da lista e retorna o carro removido
    const [carroRemovido] = carros2025.splice(carroindex, 1);
    return carroRemovido
};