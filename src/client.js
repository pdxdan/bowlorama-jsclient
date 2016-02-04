import { resolve } from 'url';
import * as actionCreators from './action_creators';
import 'whatwg-fetch'
import * as deqConfig from "./config";

export function getBoardState() {
    let apiURL = deqConfig.apiRestProtocol + "://" + deqConfig.apiHostPort + "/rest/v1/deq";

    return fetch(apiURL, {
        method: 'GET',
        headers: new Headers({
            'accept': 'application/json',
        })
    }).then( (resp) => resp.json() );
}

export function addFrame(gameid, player, ball) {
    let apiURL = deqConfig.apiRestProtocol + "://" + deqConfig.apiHostPort + "/prod/bowlorama-append-ball-to-history";

    let postBody = {"gameid":gameid,"player":player,"ball":ball};

    return fetch(apiURL, {
        method: 'POST',
        headers: new Headers({
            'accept': 'application/json',
        }),
        body: JSON.stringify(postBody)
    }).then( (resp) => resp.json() );
}
