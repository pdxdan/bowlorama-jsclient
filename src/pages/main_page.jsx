import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';

import * as actionCreators from '../action_creators';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps( nextProps ) {
    }

    render() {
        return (
            <div className="scoreboard">
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
