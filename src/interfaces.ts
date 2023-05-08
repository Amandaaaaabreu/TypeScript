interface Tela{
    title : string;
    description: string;
    genre: string;
    plataform: string[];
    getSmilars: (title: string) => void;
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
tlou.getSmilars(tlou.title);