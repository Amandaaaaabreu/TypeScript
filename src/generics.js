"use strict";
// serve para reutilização de codigo.
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState('Amanda');
console.log(newState.getState());
