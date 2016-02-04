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
