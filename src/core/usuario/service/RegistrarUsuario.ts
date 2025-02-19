import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {


    async executar(usuario: Usuario): Promise<any> {
       const senhaCriptografada = await usuario.senha.split('').reverse().join('');
       console.log(`\n\n Senha criptografada: ${senhaCriptografada}`);
    }
    
}