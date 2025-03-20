import LoginUsuario from '@/core/usuario/service/LoginUsuario';
import RegistrarUsuario from '@/core/usuario/service/RegistrarUsuario';
import { Express } from 'express';
import ProvedorJwt from './ProvedorJwt';
export default class LoginUsuarioController {
    constructor(
        servidor: Express,
        casoDeUso: LoginUsuario
    ) {
        
        servidor.post('/api/usuarios/login', async (req, res) => {
            try {

                const  provedorJwt = new ProvedorJwt(process.env.JWT_SECRET || "");
                
                const user = await casoDeUso.executar({
                    email: req.body.email,
                    senha: String(req.body.senha)
                });
                res.status(200).send({
                    user,
                    token: provedorJwt.gerar(user),
                });
            } catch (erro:any) {
                console.error(erro);
                res.status(400).send({ error: erro.message });
            }

        });
    }
}