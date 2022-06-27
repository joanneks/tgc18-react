import React from 'react'

export default class Dice extends React.Component {

    getRandomNumber() {
        return Math.floor(Math.random()*6+1)
    }

    state = {
        // set the initial value of number state property to be between 1 to 6
        'number': this.getRandomNumber(),
    }

    roll = async () =>{
        let number = this.getRandomNumber();
        this.setState({
            'number': number,
        })
    }

    getColor(number) {
        if (number==1) {
            return 'red';
        } else if (number == 6) {
            return 'green';
        } else {
          return 'black';
        }
    }

    render() {
     
        return <React.Fragment>
            <div style={{
                'border': "1px solid black",
                'height':"50px",
                'width':"50px",
                'color': this.getColor(this.state.number)
            }}
            onClick={this.roll}
            >
                {this.state.number}
            </div>
        </React.Fragment>
    }
}