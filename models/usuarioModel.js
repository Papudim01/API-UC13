// Módulo brypt para criptografar senhas
import bcrypt from 'bcrypt';

// (Em cenário real seria o banco de dados)
let usuarios = [
    {
        id: ',',
        nome: 'Luiz Gustavo',
        email: 'lgustavon@exemplo.com',
        senha: bcrypt.hashSync('senha123', 10),
    },
];

// Função para obter todos os usuários
export const getAllUsuario = () => usuarios;

// Função para encontrar um usuario pela E-mail
export const getUsuarioByEmail = (email) => {
    return usuarios.find((usuario) => usuario.email === email);
};

// Função para criar um novo usuário
export const creatUsuario = (novoUsuario) => {
    const novoId = usuarios.length + 1;

    // Cria o novo usuario com dados  fornecidos e senha criptografada
    const usuario = {
        ...novoUsuario,
        id: novoId,
        senha: bcrypt.hashSync(novoUsuario.senha, 10),
    };

    // Adiciona o usuario
    usuarios.push(usuario);

    // Retorna o usuario criado 
    return usuario;
};


// função para atualizar os dados de um usúario existente
export const updateUsuario = (id, dadosAtualizados) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;
    
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizados };
    
    return usuarios[usuarioIndex]
};


// Função para excluir um usuario pelo ID
export const deleteUsuario = (id) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;

    const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

    return usuarioRemovido;
};

