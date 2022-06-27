import React from 'react'

class TickleBox3 extends React.Component {
    state = {
        'showMessage':false
    }

    render() {
        return (
             <div
                style={{
                    'backgroundColor':'yellow',
                    'width': '50px',
                    'height': '50px'
            
                }}
                onMouseEnter={()=>{
                    this.setState({
                        'showMessage': !this.state.showMessage
                    })
                }}
                onMouseLeave={()=>{
                    this.setState({
                        'showMessage': !this.state.ShowMessage
                    })
                }}
             >{this.state.showMessage ? "This tickles" : ""}</div>
        )
    }
}

export default TickleBox3;