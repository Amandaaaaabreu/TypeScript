// boalean (true/false) 
let isOpen : boolean
isOpen = true

// string ('amanda') ("amanda") (`amanda`)
let message : string
message = `amanda ${isOpen}` // concatenação

//number (int, float, hexadecimal, binario)
let total : number
total = 20 

//array (type[])
let item : number[]
item = [1,2,3,42]

let p : string[]
p : ['amanda', 'giselle', 'giovanna']

//array (type[])
let value : Array<number>
value = [1,5,9]

// tuple é um array (na tupla sabemos a quantidade de elemento dentro dele e o seu tipo)
let title : [number, string, boolean]
title = [1, 'a', true]

// enum (serve para criar um conjunto de chaveValor)
enum colors{ 
    white = '#fff',
    black = '#000'
}

// any (pode ser QUALQUER COISA) (exclusivo do typeScript) 
let coisa : any 
coisa = 'amanda' // string

let coisa1 : any 
coisa1 = true   // bolean

let coisa2 : any 
coisa2 = 2  //number

let coisa3 : any 
coisa2 = ['amanda', 2] // array
