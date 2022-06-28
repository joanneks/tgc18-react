import React from 'react'

export default class SurveyForm extends React.Component {
    // SEIPO
    // state: what are the state variables of the component (i.e what are the data that component is in charge of)
    state = {
        'name':'',
        'email':'',
        'colour':'',
        'country':'singapore'
    }
   
    updateFormField = (event) => {
        let stateVariable = event.target.name;
        this.setState({
            [stateVariable]: event.target.value
        })
    }

    // updateFormFieldEx = (event, name) =>{
    //     this.setState({
    //         [name]: event
    //     })
    // }

    // createUpdateFormFieldFunction = (name) => {
    //     return (event) =>{
    //         this.setState({
    //             [name]:event.target.value
    //         })
    //     }
    // }

    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" 
                           name="name"
                           className="form-control"
                           value={this.state.name}
                           onChange={this.updateFormField}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                           name="email"
                           className="form-control"
                           value={this.state.email}
                           onChange={this.updateFormField}       
                    />
                </div>
                <div>
                    <label>Favorite Color:</label>
                    <input type="radio"
                           name="colour"
                           value="red" 
                           className="form-check-input"
                           onChange={this.updateFormField}
                           checked={this.state.colour === 'red'}
                           />
                    <label className="form-check-label">Red</label>

                    <input type="radio" 
                           name="colour"
                           value="green"
                           className="form-check-input"
                           onChange={this.updateFormField}
                           checked={this.state.colour === 'green'}
                           />
                    <label className="form-check-label">Green</label>

                    <input type="radio"
                           name="colour"
                           value="blue"
                           className="form-check-input"
                           onChange={this.updateFormField}
                           checked={this.state.colour === 'blue'}/>
                    <label className="form-check-label">Blue</label>
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" className="form-control" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>


            </div>
        )
    }
}