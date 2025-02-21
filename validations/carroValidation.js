import Joi from 'joi';

// Validação para o modelo de carro
export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required().messages({
        'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
        'any.required': 'O nome do carro é obrigatório.',
    }),
    sigla: Joi.string().length(3).required().messages({
        'string.length': 'A sigla deve ser exatamente 3 caracteres.',
        'any.required': 'A sigla é obrigatório.',
    }),
    velocidadeMaxima: Joi.number().min(1).required().messages({
        "number.min": "A velocidade maxima deve ser maior ou a 1.",
        "any.required": 'A velocidade maxima é obrigatório.',
    }),
    potencia: Joi.number().min(1).required().messages({
        "number.min": "A potência deve ser maior ou igual a 1.",
        "any.required": "A pontência é obrigatoria",
    }),
    consumo: Joi.number().min(0.1).required().messages({
        "number.min": "O consumo deve ser maior ou igual a 0.1",
        "any.required": "O nome do carro é obrigatório.",
    }),
});

// Validação para atualização de carro
export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string().min(3).messages({
        'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
    }),
    sigla: Joi.string().length(3).messages({
        'string.length': 'A sigla deve ter exatamente 3 Caracteres.',
    }),
    velocidadeMaxima: Joi.number().min(1).messages({
        'Number.min': 'A velociade maxima deve ser maior ou igual a 1.',
    }),
    potencia: Joi.number().min(1).messages ({
        'number.min': 'O potência deve ser maior ou igual a 1.',
    }),
    consumo: Joi.number().min(0.1).messages ({
        'number.min': 'O consumo deve ser maior ou igual a 0.1.',
    }),
}).min(1);
