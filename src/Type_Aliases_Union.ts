function logDetails(uid: number | string , item:string){
    console.log(`Um produto com id ${uid} e item ${item}`)
}

// essa | barra que eu passei fala de que tipo é meu uid, no caso eu coloquei como um number e uma string


function logInfo(uid: number | string, user: string){
    console.log(`Um produto com id ${uid} e nome ${user}`)
}

logDetails(123, "sapato");
logDetails("123", 'sapato');

logInfo(123, 'Sexta'); // posso usar tanto um number e uma string 
logInfo('123', 'sexta'); // como posso usar duas strings ao mesmo tempo

//CRIANDO UM TYPE ALIASE
// Com o type aliase eu consigo facilitar o meu codigo, para nao escrever a mesma coisa varias vezes.
type Uid = number | string

type Plataforma = 'Windows' | 'Linux' | 'Mac Os'

function renderPlataforma(plataforma: Plataforma){
    return plataforma;
}