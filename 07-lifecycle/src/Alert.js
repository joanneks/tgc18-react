import React from 'react'

export default class Alert extends React.Component {
    state = {
        'msg':"Some message"
    }
    constructor(props) {
        // cannot call setState in constructor
        super(props);
        console.log('constructor')
    }
    componentDidMount() {
        console.log('component did mount')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("update detected!")
        console.log(prevState);
    }
    render() {
        return <div>
            <h1>Alert!!</h1>
            <h2>{this.state.msg}</h2>
        </div>

    }
}