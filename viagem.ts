export class Viagem{

    /*constructor (public tempogasto:number, public velocidademedia:number, public rendimentoVeiculo:number)*/

    tempogasto:number
    velocidademedia: number
    rendimentoVeiculo: number

    obterDistancia(){
        return this.tempogasto * this.velocidademedia
    }
    obterConsumo(){
        return this.obterDistancia() / this.rendimentoVeiculo
    }
}
//export {Viagem as viagem}

