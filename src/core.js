import {Map, List, fromJS} from 'immutable';

import initialJson from '../etc/initial_state.js';

let initialStateTemplate = {
    data: initialJson,
    gameState : {
    },
    session: {
    }
};

export const INITIAL_STATE =  fromJS(JSON.parse(JSON.stringify(initialStateTemplate)));

export function reset() {
    let defaultState = JSON.parse(JSON.stringify(initialStateTemplate));
    return fromJS(defaultState);
}

export function setBoardState( state, boardState ) {
    return state;
}
