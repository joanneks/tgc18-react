import React from 'react'
import axios from 'axios'

export default class SurveyForm extends React.Component {

   async componentDidMount() {
      let fruitResponse = await axios.get('/fruits.json');
      let colourResponse = await axios.get('/colours.json');
      let countryResponse = await axios.get('/countries.json');
      this.setState({
        'allFruits': fruitResponse.data,
        'allColours':colourResponse.data,
        'allCountries':countryResponse.data,
        'loaded': true
      })

      
   }

    // SEIPO
    // state: what are the state variables of the component (i.e what are the data that component is in charge of)
    state = {
        'name': '',
        'email': '',
        'colour': '',
        'country': 'singapore',
        'fruits': [],
        'hasSubmitted': false,
        'allCountries':[],
        'allColours':[],
        'allFruits':[],
        'loaded':false
    }

    updateName = (event) => {
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

    updateCountry = (event) => {
        this.setState({
            'country': event.target.value
        })
    }

    updateFruits = (event) => {

        if (this.state.fruits.includes(event.target.value)) {
            // removing
            let indexToRemove = this.state.fruits.indexOf(event.target.value);
            let cloned = [
                ...this.state.fruits.slice(0, indexToRemove),
                ...this.state.fruits.slice(indexToRemove + 1)
            ]
            this.setState({
                'fruits': cloned
            })
        } else {
            // 1. clone the original array
            // 2. update the cloned array
            // let cloned = [...this.state.fruits, event.target.value];
            // this.setState({
            //     'fruits': cloned
            // })

            this.setState({
                'fruits': [...this.state.fruits, event.target.value]
            })

        }

    }

    getNameError = () => {
        if (this.state.name.length < 3) {
            return "The name must have more 3 or more characters"
        } else if (this.state.name > 20) {
            return "The name must not exceed 20 characters"
        } else {
            return null
        }
    }

    getEmailError = () => {
        if (this.state.email.includes('@') === false) {
            return "The email is in the wrong format";
        } else {
            return null;
        }
    }

    submit = () => {

        this.setState({
            'hasSubmitted': true
        })

        // check if there is no error
        if (this.getNameError() === null && this.getEmailError() === null) {
            alert("All data is ok!")
        }
    }

    renderColours() {
        let options = [];
        for (let c of this.state.allColours) {
            options.push(
                <React.Fragment key={c.value}>
                    <input type="radio"
                        name="colours"
                        value={c.value}
                        className="form-check-input"
                        onChange={this.updateColour}
                        checked={this.state.colour === c.value}
                    />
                    <label className="form-check-label">{c.display}</label>
                </React.Fragment>
            )
        }
        return options;
    }

    render() {

        if (this.state.loaded) {
            return (
                <div>
                    <div>
                        <label>Name:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.updateName}
                        />
                        {this.getNameError() && this.state.hasSubmitted ? <span className="error">{this.getNameError()}</span> : ""}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.updateEmail}
                        />
                        {this.getEmailError() && this.state.hasSubmitted ? <span className="error">{this.getEmailError()}</span> : ''}
                    </div>
                    <div>
                        <label>Favorite Color:</label>
                        {this.renderColours()}
                    </div>
                    <div>
                        <label>Country</label>
                        <select className="form-control" value={this.state.country} onChange={this.updateCountry}>
                            {this.state.allCountries.map( c =><option value={c.value} key={c.value}>
                                {c.display}
                            </option>)}
    
                        </select>
                    </div>
                    <div>
                        <label>Fruits</label>
                        {
                            this.state.allFruits.map( f =><React.Fragment key={f.value}>
                          
                                <input type="checkbox" onChange={this.updateFruits} className="form-check-input" name="fruits" value={f.value} />
                                <label className="form-check-label">{f.display}</label>
                            </React.Fragment>)
                        }
    
                      
                    </div>
                    <button onClick={this.submit}>Submit</button>
                </div>
            )
        } else {
            return <p>Loading please wait...</p>
        }

      
    }
}