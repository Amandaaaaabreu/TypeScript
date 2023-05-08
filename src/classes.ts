// as classes não sao obrigatórias no typescript.

class userConta{
    name: string;
    id: number;
    idade: number;

    constructor(name:string, id:number, idade:number){
        this.name = name;
        this.id = id;
        this.idade = idade;
    }

    logDetails(): void {
        console.log(`The players ${this.name} is ${this.idade} years old.`);
    }
}

const will = new userConta('Amanda', 7,20);
console.log(will);