import {Pessoa} from "./pessoa"

let otavio = new Pessoa()

otavio.peso = 89
otavio.altura = 1.78

console.log(otavio.imc())
console.log(otavio.classificar())