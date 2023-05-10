// serve para reutilização de codigo.

// <> dentro desse sinal irei passar os tipos que vou trabalhar.

// S = State
// T = Type
// E = Element 

type numOrStr = number | string // type aliase pra usar tipos primitivos 

function useState<A extends numOrStr | string = string >(){  // quando eu defino que é do tipo string ele nao pode ser de qualquer outro tipo.
    let state : A

    function getState(){
        return state
    }

    function setState(newState: A){
        state =  newState
    }

    return {getState, setState};

}


const newState = useState(); 

newState.setState('Amanda');
console.log(newState.getState());

