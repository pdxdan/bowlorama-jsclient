import {Map, List, fromJS} from 'immutable';

import {
    reset,
    setBoardState,
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
    }
    return state;
}
