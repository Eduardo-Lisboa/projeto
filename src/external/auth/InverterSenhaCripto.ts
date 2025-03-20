import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";


// Na arquitetura hexagonal, a implementação é um adaptador
//O adaptador é responsável por implementar a interface
//O adaptador não faz parte do core
export default class InverterSenhaCripto implements ProvedorCriptografia{


    criptografar(senha: string): string {
       return senha.split('').reverse().join('')
    }

    comparar(senha: string, hash: string): boolean {
        return senha === hash.split('').reverse().join('')
    }
}