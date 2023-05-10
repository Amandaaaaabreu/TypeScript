"use strict";
// serve para reutilização de codigo.
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState('Amanda');
console.log(newState.getState());
