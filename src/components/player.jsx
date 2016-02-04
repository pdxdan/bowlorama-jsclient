import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';

import * as actionCreators from '../action_creators';
import PlayerFrame from '../components/player_frame.jsx';
import InputFrame from '../components/input_frame.jsx';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const frames = [];
        const name = this.props.playerName;
        const score = this.props.player.score;

        for ( let i = 0; i < 22; i++ ) {
            if ( i < this.props.player.frames.length) {
                frames.push( this.props.player.frames[i]);
            } else {
                frames.push("");
            }
        }

        return (
            <div>
                <h3>{name}</h3>
                <InputFrame {...this.props}/>
                <table className="player-table">
                    <tbody>
                    <tr>
                        {frames.map( (frame, pos) => {
                            return <PlayerFrame
                                frameValue={frame}
                                key={pos}
                                score={pos == frames.length - 1 ? score : ""}
                            />
                        })}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}
