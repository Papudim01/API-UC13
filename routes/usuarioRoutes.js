import express from 'express';
import { getuUsuarios, loginUsuario } from '../controllers/usuarioController';
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rota para obter todos os usuarios (Necessita de autenticação)
router.get('/', authenticate, getuUsuarios);

/*abaixo teria todas as outras rotas (Códigos) que são necessarias para uma API,
também sendo necessario incluir no Controller (Post, PUT, DELETE),
porém na de usuário é somente "Escopo" de como poderia ser feito. */
export default router;