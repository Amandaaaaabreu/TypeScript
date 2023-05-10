// utilitarios para trabalhar com os tipos.
 type Todo = {
    title: string;
    description: string;
    completed: boolean;
 };

// Readonly
 const todo:Readonly <Todo> = {
    title: 'Testando Todo',
    description: 'Relembrando detalhes',
    completed: true,
 };

 console.log(todo);

 function updateTodo(todo:Todo, fieldsUpdate: Partial <Todo>){ // Partial deixa tudo opcional mas garante que as propriedades que formos passar esteja dentro do objeto inicial.
    return{...todo, ...fieldsUpdate}
 };

 const todo2: Todo = updateTodo(todo, {completed: false});
 console.log(todo2);


// Pick
 type TodoPreview = Pick<Todo, "title" | "completed"> // irá pegar um conjunto de propriedades de um objeto. (no meu caso so do title e do completed).

 const todo3: TodoPreview = {
    title: "Eu estou mundando meu titulo",
    completed: true,
 }

 console.log(todo3);

 // Omit => irá omitir o que eu informar
 type TodoPreview2 = Omit<Todo, "description">

 const todo4: TodoPreview = {
    title: "Eu estou mundando meu titulo",
    completed: true,
 }