import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';


export default React.createClass({
    render: function() {
        return <div className="page-wrapper">
            {this.props.children}
        </div>
    }
});
