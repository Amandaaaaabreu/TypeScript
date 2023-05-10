// serve para reutilização de codigo.

function UseState(){
    let state : number

    function getState(){
        return state
    }

    function setState(newState: number){
        state =  newState
    }

    return {getState, setState};

}


const newState = UseState();

newState.setState(123);
console.log(newState.getState());