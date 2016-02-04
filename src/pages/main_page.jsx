import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';

import * as actionCreators from '../action_creators';
import Player from '../components/player.jsx';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps( nextProps ) {
    }

    render() {
        const players = this.props.data.players;

        return (
            <div className="scoreboard">
                {players.map( player => {
                    return <Player {...this.props}
                        player={player}
                    />
                })}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state.toJSON();
}

export const MainPageContainer = connect(
    mapStateToProps, actionCreators
)(MainPage);
