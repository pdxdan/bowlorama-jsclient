import {Map, List, fromJS} from 'immutable';

import initialJson from '../etc/initial_state.js';

let initialStateTemplate = {
    data: initialJson,
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

export function addFrame( state, player, frame ) {
    var playerFrames = state.getIn( ["data", "players", player, "frames"]).toJS();
    playerFrames.push(frame);
    return state.setIn( ["data", "players", player, "frames" ], fromJS(playerFrames));

}

export function updatePlayer( state, player, result ) {
    debugger;
    return state.setIn( ["data", "players", player, "frames" ], fromJS(result.ballhistory || []))
        .setIn( ["data", "players", player, "score" ], fromJS(result.score || 0) );
}