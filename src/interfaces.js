"use strict";
const tlou = {
    title: "The Last of Us",
    description: 'The best game in the world',
    genre: 'Action',
    plataform: ["PS4", "PS5"],
    getSmilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro `);
    }
};
console.log(tlou.title);
if (tlou.getSmilars) { // se existir meu metodo getSimilars aí eu chamo ele
    tlou.getSmilars(tlou.title);
}
const leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    plataform: ['PS5'],
    originalTela: tlou,
    newContent: ["3 hours story", "new characteres"],
};
