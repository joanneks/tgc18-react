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

    // ARROW FUNCTION
    // event handlers should always be ARROW FUNCTIONS
    click = () => {
        // DO NOT MUTATE (i.e change) A STATE VARIABLE DIRECTLY
        // BECAUSE REACT CANNOT DETECT CHANGES TO THE STATE
        // ONLY ON THE NEXT RENDER WILL YOU SEE THE CHANGE
        // this.state.count += 1;
        // this.state.count++;
        // this.state.count = this.state.count + 1;

        // correct way to update the state
        // React can detect changes to the state via the setState function
        this.setState({
            'count': this.state.count + 1
        })
    }

    displayStar() {
        if (this.state.count % 2 ===0) {
            return "*"
        } else {
            return "";
        }
    }
   
    render() {

        let stars = "";
        if (this.state.count % 2 === 0) {
            stars = "*";
        }

        return (
            <div style={
                {
                    'border':'10px solid',
                    'borderColor': this.state.count > 0 ? "green" : "red",
                    'padding':'10px',
                    'width': '20px',
                    'fontSize': `${this.state.count + 10}px`,
                    
                }
            } onClick={this.click}>{this.state.count}
            {this.displayStar()}
            {this.state.count % 2 === 0 ? '*' : ''}
            {stars}
            {this.state.count % 2 === 0 && "*"}
            
            </div>
        )
    }
}

// alternative method of exporting:
// export default NumberBox