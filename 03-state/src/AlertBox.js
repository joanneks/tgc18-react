// import React from 'react';
// alternatively:
import {Component} from 'react'; // <-- ONLY import React.Component

export default class AlertBox extends Component {
 state = {
    'message':this.props.message
 }
 render() {
    return (
        <div style={{
            "border":"4px solid black"
        }}>{this.state.message}</div>
    )
 }
}