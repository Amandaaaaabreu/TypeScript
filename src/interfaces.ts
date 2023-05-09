interface Tela{
    title : string ;
    description: string | number;
    genre: string;
    plataform?: string[];
    getSmilars?: (title: string) => void;
}


const tlou : Tela = {
    title: "The Last of Us",
    description: 'The best game in the world',
    genre: 'Action',
    plataform: ["PS4", "PS5"],
    getSmilars: (title: string) =>{
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro `)
    }
}

console.log(tlou.title);

if(tlou.getSmilars){ // se existir meu metodo getSimilars aí eu chamo ele
    tlou.getSmilars(tlou.title);
}


interface DLC extends Tela{ // extendo a interface
    originalTela: Tela;  // informacoes da interface original.
    newContent: string[];
}

const leftbehind: DLC = { // passando as informacoes da interface original para a DLC.
       title: "The Last of Us - Left Behind",
       description:"You play as Ellie before the original game",
       genre: "Action",
       plataform: ['PS5'],
       originalTela: tlou,
       newContent: ["3 hours story","new characteres"],

};

// As interfaces servem somente para criação de objetos mais complexos.

class CreateGame implements Tela{  // interface sendo usada com classe.
    title : string;
    description: string;
    genre: string;
    
    constructor(t: string, d:string, g: string){
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}