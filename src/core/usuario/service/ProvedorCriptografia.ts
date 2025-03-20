
// Interface que define o contrato para os provedores de criptografia
//Na arquitetura hexagonal, a interface é uma porta 
//Na arquitura hexagonal, a porta faz parte do core
export default interface ProvedorCriptografia {
    criptografar(senha: string): string;
    comparar(senha: string, hash: string): boolean;
}