"use strict";
// boalean (true/false) 
var isOpen;
isOpen = true;
// string ('amanda') ("amanda") (`amanda`)
var message;
message = "amanda ".concat(isOpen); // concatenação
//number (int, float, hexadecimal, binario)
var total;
total = 20;
//array (type[])
var item;
item = [1, 2, 3, 42];
var p;
p: ['amanda', 'giselle', 'giovanna'];
//array (type[])
var value;
value = [1, 5, 9];
// tuple é um array (na tupla sabemos a quantidade de elemento dentro dele e o seu tipo)
var title;
title = [1, 'a', true];
// enum (serve para criar um conjunto de chaveValor)
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
// any (pode ser QUALQUER COISA) (exclusivo do typeScript) 
var coisa;
coisa = 'amanda'; // string
var coisa1;
coisa1 = true; // bolean
var coisa2;
coisa2 = 2; //number
var coisa3;
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
var test;
test = {
    key: "fi"
};
