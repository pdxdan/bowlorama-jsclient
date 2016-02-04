import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';

export default class InputFrame extends React.Component {
    constructor(props) {
        super(props);
        this.setFrame = this.setFrame.bind(this);
        this.roll = this.roll.bind(this);
        this.feelingLucky = this.feelingLucky.bind(this);
    }

    roll() {
        this.props.addFrameRemote( this.props.playerName, this.state.frameValue );
    }

    feelingLucky() {
        this.props.addFrameRemote( this.props.playerName, Math.floor(Math.random() * 10) + 1 );
    }

    setFrame(event) {
        this.setState( {
            frameValue : event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="input-frame">
                    <button onClick={this.roll}>Roll</button>
                    <input type="text" onChange={this.setFrame}></input>
                </div> | <button onClick={this.feelingLucky}>Feeling lucky!</button>
            </div>
        );
    }

}
