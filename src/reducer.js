import {Map, List, fromJS} from 'immutable';

import {
    reset,
    setBoardState,
    addFrame,
    updatePlayer,
    INITIAL_STATE
} from './core';

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'RESET': {
            return reset(state);
        }
        case 'SET_BOARD_STATE': {
            return setBoardState(state, action.boardState);
        }
        case 'ADD_FRAME': {
            return addFrame(state, action.player, action.frame);
        }
        case 'UPDATE_PLAYER': {
            return updatePlayer(state, action.player, action.result);
        }
    }
    return state;
}
