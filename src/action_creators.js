import * as client from "./client";
import * as deqConfig from "./config";

export function reset() {
    return {
        type: 'RESET'
    };
}

export function setBoardState( boardState ) {
    return {
        type: 'SET_BOARD_STATE',
        boardState
    };
}

export function bootstrap() {
    return (dispatch) => {
    };
}