import Carro from "./Carro"

export default class Fusca implements Carro {

    constructor(
        readonly velocidadeMaxima: number = 140,
        private _velocidadeAtual: number = 0 
    ){}



    get velocidadeAtual(): number {
        return this._velocidadeAtual
    }

    acelerar(): void {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 2, this.velocidadeMaxima)
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 2, 0)
    }
}