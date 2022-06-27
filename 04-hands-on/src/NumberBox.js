import React from 'react'

export default class NumberBox extends React.Component {
    state = {
        'count': 0
    }

    increment = () => {
        this.setState({
            'count': this.state.count + 1
        });

    }

    // how to emulate an arrow function without using an arrow function
    decrement = function(){
        this.setState({
            'count': this.state.count - 1
        })
    }.bind(this); //<-- the `this` will always refer to the object that the function defined in

    render(){
        return (
            <React.Fragment>
                <div style={{
                    'border':'1px solid black',
                    'width':'50px',
                    'height':'50px'
                }}>
                    {this.state.count}
                </div>
                <button onClick={this.increment}>+</button><button onClick={this.decrement}>-</button>
            </React.Fragment>
        )
    }
}