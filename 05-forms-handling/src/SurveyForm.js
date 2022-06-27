import React from 'react'

export default class SurveyForm extends React.Component {
    // SEIPO
    // state: what are the state variables of the component (i.e what are the data that component is in charge of)
    state = {
        'name':'',
        'email':'',
        'colour':''
    }

    updateName = (event) =>{
        console.log(event.target.value); // =>  `event` will always refer event that happened
                                         //=>  event.target will the element that the event happened on
                                         // => event.target.value will be what the new value for the element should be
        this.setState({
            'name': event.target.value
        })                            
    }

    updateEmail = (event) => {
        this.setState({
            'email': event.target.value
        })
    }

    updateColour = (event) => {
        this.setState({
            'colour': event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" 
                           className="form-control"
                           value={this.state.name}
                           onChange={this.updateName}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                           className="form-control"
                           value={this.state.email}
                           onChange={this.updateEmail}       
                    />
                </div>
                <div>
                    <label>Favorite Color:</label>
                    <input type="radio"
                           name="colours"
                           value="red" 
                           className="form-check-input"
                           onChange={this.updateColour}
                           checked={this.state.colour === 'red'}
                           />
                    <label className="form-check-label">Red</label>

                    <input type="radio" 
                           name="colours"
                           value="green"
                           className="form-check-input"
                           onChange={this.updateColour}
                           checked={this.state.colour === 'green'}
                           />
                    <label className="form-check-label">Green</label>

                    <input type="radio"
                           name="colours"
                           value="blue"
                           className="form-check-input"
                           onChange={this.updateColour}
                           checked={this.state.colour === 'blue'}/>
                    <label className="form-check-label">Blue</label>
                </div>
            </div>
        )
    }
}