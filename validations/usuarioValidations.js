import joi from 'joi';

// Validação de criação 
export const modeloUsuario = joi.object({
    nome: joi.string().min(3).required(),
    email: joi.string().email().required(),
    senha: joi.string().min(6).required(),
});

// Validação de login
export const modeloLogin = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().min(6).required(),
});

// Validação de atualização 
export const modeloAtualizacaoUsuario = joi.object({
    nome: joi.string().min(3),
    email: joi.string().email(),
    senha: joi.string().min(6),
}).min(1);
