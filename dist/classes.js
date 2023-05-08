"use strict";
// as classes não sao obrigatórias no typescript.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userConta = /** @class */ (function () {
    function userConta(name, idade) {
        this.name = name;
        this.idade = idade;
    }
    userConta.prototype.logDetails = function () {
        console.log("The players ".concat(this.name, " is ").concat(this.idade, " years old."));
    };
    return userConta;
}());
var contaEscolhida = /** @class */ (function (_super) {
    __extends(contaEscolhida, _super);
    function contaEscolhida(name, idade, sexo, nickname) {
        var _this = _super.call(this, name, idade) || this;
        _this.sexo = sexo;
        _this.nickname = nickname;
        return _this;
    }
    return contaEscolhida;
}(userConta));
var will = new userConta('Amanda', 20);
console.log(will);
will.logDetails();
var john = new contaEscolhida("John", 20, 'masculino', 'jhonmaster');
console.log(john);
