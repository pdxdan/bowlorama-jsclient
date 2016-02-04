import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';

export default class InputFrame extends React.Component {
    constructor(props) {
        super(props);
        this.setFrame = this.setFrame.bind(this);
        this.roll = this.roll.bind(this);
    }

    roll() {
        this.props.addFrameRemote( this.props.playerName, this.state.frameValue );
    }

    setFrame(event) {
        this.setState( {
            frameValue : event.target.value
        });
    }

    render() {
        return (
            <div className="input-frame">
                <input type="text" onChange={this.setFrame}></input>
                <button onClick={this.roll}>Roll</button>
            </div>
        );
    }

}
