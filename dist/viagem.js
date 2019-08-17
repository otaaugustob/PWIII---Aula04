"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem() {
    }
    Viagem.prototype.obterDistancia = function () {
        return this.tempogasto * this.velocidademedia;
    };
    Viagem.prototype.obterConsumo = function () {
        return this.obterDistancia() / this.rendimentoVeiculo;
    };
    return Viagem;
}());
exports.Viagem = Viagem;
//export {Viagem as viagem}
