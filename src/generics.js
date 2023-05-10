"use strict";
// serve para reutilização de codigo.
function UseState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = UseState();
newState.setState(123);
console.log(newState.getState());
