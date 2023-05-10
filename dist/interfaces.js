"use strict";
var tlou = {
    title: "The Last of Us",
    description: 'The best game in the world',
    genre: 'Action',
    plataform: ["PS4", "PS5"],
    getSmilars: function (title) {
        console.log("Similar games to ".concat(title, ": Uncharted, A Plague Tale, Metro "));
    }
};
console.log(tlou.title);
if (tlou.getSmilars) { // se existir meu metodo getSimilars aí eu chamo ele
    tlou.getSmilars(tlou.title);
}
var leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    plataform: ['PS5'],
    originalTela: tlou,
    newContent: ["3 hours story", "new characteres"],
};
// As interfaces servem somente para criação de objetos mais complexos.
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
