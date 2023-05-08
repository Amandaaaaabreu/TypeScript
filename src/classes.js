"use strict";
// as classes não sao obrigatórias no typescript.
class userConta {
    constructor(name, idade) {
        this.name = name;
        this.idade = idade;
    }
    logDetails() {
        console.log(`The players ${this.name} is ${this.idade} years old.`);
    }
}
class contaEscolhida extends userConta {
    constructor(name, idade, sexo, nickname) {
        super(name, idade);
        this.sexo = sexo;
        this.nickname = nickname;
    }
}
const will = new userConta('Amanda', 20);
console.log(will);
will.logDetails();
const john = new contaEscolhida("John", 20, 'masculino', 'jhonmaster');
console.log(john);
