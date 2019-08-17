"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var otavio = new pessoa_1.Pessoa();
otavio.peso = 89;
otavio.altura = 1.78;
console.log(otavio.imc());
console.log(otavio.classificar());
