"use strict";
// boalean (true/false) 
let isOpen;
isOpen = true;
// string ('amanda') ("amanda") (`amanda`)
let message;
message = `amanda ${isOpen}`; // concatenação
//number (int, float, hexadecimal, binario)
let total;
total = 20;
//array (type[])
let item;
item = [1, 2, 3, 42];
let p;
p: ['amanda', 'giselle', 'giovanna'];
//array (type[])
let value;
value = [1, 5, 9];
// tuple é um array (na tupla sabemos a quantidade de elemento dentro dele e o seu tipo)
let title;
title = [1, 'a', true];
// enum (serve para criar um conjunto de chaveValor)
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
// any (pode ser QUALQUER COISA) (exclusivo do typeScript) 
let coisa;
coisa = 'amanda'; // string
let coisa1;
coisa1 = true; // bolean
let coisa2;
coisa2 = 2; //number
let coisa3;
coisa2 = ['amanda', 2]; // array
// void (vazio)
function teste() {
    console.log('amanda');
}
// never (nunca vai retornar)
function error() {
    throw new Error("error"); // (erro nunca retorna)
}
//object (tudo aquilo que não é number, array, string, boolean)
let test;
test = {
    key: "fi"
};
