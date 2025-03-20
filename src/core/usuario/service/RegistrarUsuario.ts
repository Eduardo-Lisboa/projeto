import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/id";
import ProvedorCriptografia from "./ProvedorCriptografia";
import RepositorioUsuario from "./RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {

    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) {}


    async executar(usuario: Usuario): Promise<any> {
       const senhaCriptografada = this.provedorCripto.criptografar(usuario.senha!);
       const usuarioExistente = await this.repositorio.buscarPorEmail(usuario.email);
       console.log("Usuario Existente" + usuarioExistente);
       if(usuarioExistente) throw new Error(Erros.USUARIO_JA_CADASTRADO);

       console.log("Usuario para salvar no Banco" + usuario);
              
       const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCriptografada
       }
        
       await this.repositorio.inserir(novoUsuario);

       
    }
    
}