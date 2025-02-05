// Importando o pacote jwt para manipulação de tokens 
import jwt from 'jsonwebtoken';

// Chave para verificar e criar tokens jwt
const JWT_SECRET = 'secreta-chave';

// Middleware de autenticação para verificar o token JWT nas requisições
export const authenticate = (req, res, next) => {
// Obtendo o token do cabeçalho authorization (Token deve ser no formato "Bearer <Token>")
    const token = req.headers.authorization?.split(' ') [1];

    if (!token) {
        return res.status(401).json({ mensagem: "Token não fornecido!"});
    }

    try {
        // A função jwt.verify decodificada e valida o token
        const decoded = jwt.verify(token, JWT_SECRET0);

        // Se o token for valido irá decodificador 
        req.user = decoded;

        //  Chama o proximo middleware ou rota na sequência (Caso houver)
        next();
    }   catch (error) { 
    res.status(401).json({ mensagem: "Token invalido"});
    }
};