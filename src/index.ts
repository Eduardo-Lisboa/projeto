import dotenv from 'dotenv';
import express from 'express';
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario';
import RepositorioUsuarioPg from './external/db/RepositorioUsuarioPg';
import SenhaCripto from './external/auth/SenhaCripto';
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController';
import LoginUsuario from './core/usuario/service/LoginUsuario';
import LoginUsuarioController from './external/api/LoginDeUsuarioController';

dotenv.config();


const app = express();
const porta = process.env.API_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(porta, () => {
    console.log(`API rodando na porta ${porta} 🚀`);
});

const repositorioUsuario = new RepositorioUsuarioPg();
const provedorCritpto = new SenhaCripto();


const registrarUsuario = new RegistrarUsuario(
    repositorioUsuario,
    provedorCritpto
);


const loginUsuario = new LoginUsuario(
    repositorioUsuario,
    provedorCritpto
);


const registrarUsuarioController = new RegistrarUsuarioController(
    app, 
    registrarUsuario
);

const loginUsuarioController = new LoginUsuarioController(
    app, 
    loginUsuario
);
