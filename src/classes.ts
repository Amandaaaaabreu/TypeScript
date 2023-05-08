// as classes não sao obrigatórias no typescript.

class userConta{
    private name: string;
    idade: number;

    constructor(name:string, idade:number){
        this.name = name;
        this.idade = idade;
    }

    logDetails(): void {
        console.log(`The players ${this.name} is ${this.idade} years old.`);
    }
    
}

class contaEscolhida extends userConta{
    sexo: string;
    nickname: string;

    constructor(name:string, idade:number, sexo:string, nickname:string){
        super(name, idade);
        this.sexo = sexo;
        this.nickname = nickname;
    }
}

const will = new userConta('Amanda' , 20);
console.log(will);
will.logDetails();

const john = new contaEscolhida("John", 20, 'masculino', 'jhonmaster');
console.log(john);