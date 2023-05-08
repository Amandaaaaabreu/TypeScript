"use strict";
// as classes não sao obrigatórias no typescript.
class userConta {
    constructor(name, id, idade) {
        this.name = name;
        this.id = id;
        this.idade = idade;
    }
    logDetails() {
        console.log(`The players ${this.name} is ${this.idade} years old.`);
    }
}
const will = new userConta('Amanda', 7, 20);
console.log(will);
