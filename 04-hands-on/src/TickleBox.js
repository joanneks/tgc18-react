import React from 'react'

class TickleBox extends React.Component {
    state = {
        'message':''
    }

    tickles = () => {
        this.setState({
            'message': 'This tickles'
        })
    }

    untickles = () => {
        this.setState({
            'message':''
        })
    }

    render() {
        return (
             <div
                style={{
                    'backgroundColor':'yellow',
                    'width': '50px',
                    'height': '50px'
            
                }}
                onMouseEnter={this.tickles}
                onMouseLeave={this.untickles}
             >{this.state.message}</div>
        )
    }
}

export default TickleBox;