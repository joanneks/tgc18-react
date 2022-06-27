// import React
import React from 'react'

// A class is a template for an object
// `extends` means inherit -- the NumberBox class has all the methods and variables from the React.Component class
export default class NumberBox extends React.Component {
   
    // `state` is an object
    // that contains key/value pairs 
    // intended for data that is accessible by the
    // component itself. It's private data so no
    // other components can access it or change it
    state = {
        "count": this.props.initialValue
    }
   
    render() {
        return (
            <div style={
                {
                    'border':'1px solid black',
                    'padding':'10px',
                    'width': '20px'
                }
            }>{this.state.count}</div>
        )
    }
}

// alternative method of exporting:
// export default NumberBox