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

export function addFrame( player, frame ) {
    return {
        type: 'ADD_FRAME',
        player: player,
        frame : frame
    };
}

export function updatePlayer( player, result ) {
    return {
        type: 'UPDATE_PLAYER',
        player: player,
        result : result
    };
}

export function addFrameRemote(player, frame) {
    return (dispatch, getState) => {
        dispatch(addFrame(player, frame));
        return client.addFrame(getState().get("data").get("gameid"), player, frame)
            .then((result) => {
                debugger;
                return dispatch(updatePlayer(player, result))
            });
    };
}

export function bootstrap() {
    return (dispatch) => {
    };
}