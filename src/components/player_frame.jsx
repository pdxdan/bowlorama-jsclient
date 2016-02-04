import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';

import * as actionCreators from '../action_creators';

export default class PlayerFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.score ? "player-table-score" : "";
        return (
            <td className={className}>
                {this.props.score || this.props.frameValue}
            </td>
        );
    }

}
