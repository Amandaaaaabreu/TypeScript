// informacoes da conta.
//informacoes do personagem. 
// play info =  conjunto de informacao da conta do personaguem com o usuario.

type infoConta = {
    id: number | string;
    name: string;
    email?: string; // esse ? deixa o email como opcional.
}

const account : infoConta = {
    id : 777,
    name: 'Amanda',
    email: 'amanda@gmail.com'
}

type infoPersonagem = {
    nickname: string;
    level: number;
    
}

const char: infoPersonagem = {
    nickname : 'amandinha',
    level: 2,

}
//interecessão. 
type PlayerInfo = infoConta & infoPersonagem

//nao preciso passar na ordem certa.
const player: PlayerInfo = {
    id:777,
    name: 'Amanda',
    email: 'amanda@gmail.com',  //opcional
    nickname: 'amandinha',
    level: 2


}