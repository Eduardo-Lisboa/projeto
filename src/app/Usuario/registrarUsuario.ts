
import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/terminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuario")

    const id = await TerminalUtil.campoRequerido("Id: ","sadsasda-asdsadas-23123wad123-21dase12")
    const nome = await TerminalUtil.campoRequerido("Nome: ", "Eduardo Lisboa")
    const email = await TerminalUtil.campoRequerido("Email: ", "eduardo@empresa.com.bet")
    const senha =  await TerminalUtil.campoRequerido("Senha: ", "123456")

    const usuario: Usuario = {
        id,
        nome,
        email,
        senha
    }

   await new RegistrarUsuario().executar(usuario)

   TerminalUtil.sucesso("Usuario registrado com sucesso!")

   await TerminalUtil.esperarEnter()
}

