import { terminal } from "terminal-kit"


export default class TerminalUtil {
    static titulo(texto: string) {
        terminal.clear()
        terminal.green( texto + '\n')
        terminal.green( '-'.repeat(texto.length) + '\n')


    }

    static async confirmacao(texto: string):Promise<boolean> {
        terminal.green(texto + ' (s/n):  \n' )
        const res = await terminal.yesOrNo({ yes: ['s', 'S'], no: ['n', 'N']}).promise
        return res ?? false
    }


    static async limpar(){
        terminal.clear()
    }


    static exibirChaveValor(chave: string, valor: string | number) {
        terminal.yellow(chave).blue(valor).white('\n')
    }



    static async campoRequerido(label: string, valorPadrao: string = ""): Promise<string> {
   
        terminal.yellow(`\n${label}`)
        const valor = await terminal.inputField({
            default: valorPadrao
        }).promise

        if (valor) return valor
        return TerminalUtil.campoRequerido(label)
    }

    static async menu(ops: string[]): Promise<[number, string]> {
        const res = await terminal.singleColumnMenu(ops).promise

        return [res.selectedIndex, res.selectedText]
    }


    static async selecao(texto: string, opcoes: string[]):Promise<[string, number]> {
        terminal.green(texto + ':\n' )
        const res = await terminal.singleLineMenu(opcoes).promise
        return [opcoes[res.selectedIndex], res.selectedIndex]
    }


    static async esperarEnter(): Promise<void> {
        terminal.white('\nPressione ENTER para continuar...')
        await terminal.inputField({echo: false}).promise
        
    }

    static async sucesso(texto: string) {
        terminal.green(texto)
    }

}