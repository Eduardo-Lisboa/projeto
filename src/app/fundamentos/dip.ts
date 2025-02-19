import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/terminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import Carro from "@/core/fundamentos/Carro";
import { terminal } from "terminal-kit";

export default async function dip(){
    TerminalUtil.titulo('DIP - Dependency Inversion Principle')

    const [_,tipo] = await TerminalUtil.selecao("Tipo de carro?", ["Ferrari", "Fusca"])

    let carro: Carro | undefined = undefined
    switch(tipo){
        case 0:
           carro = new Ferrari()
            break
        case 1:
            carro = new Fusca()
        break
    }
    if (carro) {
        corrida(carro, terminal.green)
    }
    await TerminalUtil.esperarEnter()

}