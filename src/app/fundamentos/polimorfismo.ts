import Carro from "@/core/fundamentos/Carro";
import TerminalUtil from "../util/terminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo")

    const [_, tipoCarroIndex] = await TerminalUtil.selecao('Escolha um tipo de carro', ['Ferrari', 'Fusca'])
    const carro: Carro = tipoCarroIndex === 0 ? new Ferrari() : new Fusca()

    
    while(true) {
        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor('Velocidade Maxima: ', `${carro.velocidadeMaxima} km/h`)
        TerminalUtil.exibirChaveValor('Velocidade Atual: ', `${carro.velocidadeAtual} km/h`)

        const [_,opc] = await TerminalUtil.selecao('Escolha uma opção', ['Acelerar', 'Frear'])
        opc === 0 ? carro.acelerar() : carro.frear()
        
        const continuar = await TerminalUtil.confirmacao('Deseja continuar?')
    if(!continuar) break
    }

1}

