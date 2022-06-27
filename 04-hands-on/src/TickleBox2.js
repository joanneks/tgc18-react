import React from 'react'

class TickleBox2 extends React.Component {
    state = {
        'showMessage':false
    }

    tickles = () => {
        this.setState({
            'showMessage': !this.state.showMessage
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
                onMouseLeave={this.tickles}
             >{this.state.showMessage ? "This tickles" : ""}</div>
        )
    }
}

export default TickleBox2;