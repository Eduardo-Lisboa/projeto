import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";
import Erros from "@/core/shared/Erros";
import ProvedorCriptografia from "./ProvedorCriptografia";

export type Entrada = {
    email: string
    senha: string
}




export default class LoginUsuario implements CasoDeUso<Entrada, Usuario> {

    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto : ProvedorCriptografia
    ){}

    async executar(entrada: Entrada): Promise<Usuario> {
        const usuarioExisteste = await this.repositorio.buscarPorEmail(entrada.email);

        if (!usuarioExisteste) {
            throw new Error(Erros.USUARIO_NAO_EXISTE);
        }

       
        const mesmaSenha = this.provedorCripto.comparar(entrada.senha, usuarioExisteste.senha!);

        if (!mesmaSenha) {
            throw new Error(Erros.SENHA_INVALIDA);
        }

        return {
            ...usuarioExisteste, senha: undefined,
        }
        
    }
}