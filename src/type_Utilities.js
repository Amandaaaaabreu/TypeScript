"use strict";
// Readonly
const todo = {
    title: 'Testando Todo',
    description: 'Relembrando detalhes',
    completed: true,
};
console.log(todo);
function updateTodo(todo, fieldsUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsUpdate);
}
;
const todo2 = updateTodo(todo, { completed: false });
console.log(todo2);
const todo3 = {
    title: "Eu estou mundando meu titulo",
    completed: true,
};
console.log(todo3);
const todo4 = {
    title: "Eu estou mundando meu titulo",
    completed: true,
};
