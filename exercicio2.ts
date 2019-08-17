import {Viagem} from "./viagem"

let consumo = new Viagem()

consumo.tempogasto = 2
consumo.velocidademedia = 100
consumo.rendimentoVeiculo = 10

console.log(consumo.obterDistancia())
console.log(consumo.obterConsumo())


/*import {viagem} from "./viagem"

let consumo = new Viagem(2,100,10)

console.log(consumo.obterDistancia())
console.log(consumo.obterConsumo())*/