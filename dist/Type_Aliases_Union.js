"use strict";
function logDetails(uid, item) {
    console.log("Um produto com id ".concat(uid, " e item ").concat(item));
}
// essa | barra que eu passei fala de que tipo é meu uid, no caso eu coloquei como um number e uma string
function logInfo(uid, user) {
    console.log("Um produto com id ".concat(uid, " e nome ").concat(user));
}
logDetails(123, "sapato");
logDetails("123", 'sapato');
logInfo(123, 'Sexta'); // posso usar tanto um number e uma string 
logInfo('123', 'sexta'); // como posso usar duas strings ao mesmo tempo
function renderPlataforma(plataforma) {
    return plataforma;
}
