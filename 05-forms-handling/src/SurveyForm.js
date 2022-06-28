import React from 'react'

export default class SurveyForm extends React.Component {
    // SEIPO
    // state: what are the state variables of the component (i.e what are the data that component is in charge of)
    state = {
        'name':'',
        'email':'',
        'colour':'',
        'country':'singapore',
        'fruits':[]
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

    updateCountry = (event) => {
        this.setState({
            'country': event.target.value
        })
    }

    // updateFruits = (event) => {


    //     // check if the value is already in the array
    //     // (i.e check if the checkbox has been checked)
    //     if (this.state.fruits.includes(event.target.value)) {
    //         // how to remove from an array
            
    //         // 1. clone the original array
    //         let cloned = this.state.fruits.slice();

    //         // 2. remove from the clone
    //         let indexToRemove = -1;
    //         for (let i =0; i < this.state.fruits.length; i++) {
    //             if (this.state.fruits[i] === event.target.value) {
    //                 indexToRemove = i;
    //                 break;
    //             }
    //         }
    //         cloned.splice(indexToRemove, 1);

    //         // 3. replace the cloned array into the state
    //         this.setState({
    //             'fruits': cloned
    //         })
    //     } else {
    //         // React community believes in values should be immutable
    //         // this only applies to array
    
    //         // 1. clone the original array
    //         let cloned = this.state.fruits.slice();

    //         // 2. update the cloned array
    //         cloned.push(event.target.value)

    //         // 3. set the cloned array back into the state
    //         this.setState({
    //             'fruits': cloned
    //         })
    //     }   
    // }

    updateFruits = (event) => {

        if (this.state.fruits.includes(event.target.value)) {
            // removing
            let indexToRemove = this.state.fruits.indexOf(event.target.value);
            let cloned = [
                ...this.state.fruits.slice(0, indexToRemove),
                ...this.state.fruits.slice(indexToRemove+1)
            ]
            this.setState({
                'fruits':cloned
            })
        } else {
        // 1. clone the original array
        // 2. update the cloned array
        // let cloned = [...this.state.fruits, event.target.value];
        // this.setState({
        //     'fruits': cloned
        // })

        this.setState({
            'fruits':[...this.state.fruits, event.target.value]
        })

        }
        
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
                <div>
                    <label>Country</label>
                    <select className="form-control" value={this.state.country} onChange={this.updateCountry}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>
                <div>
                    <label>Fruits</label>
                    <input type="checkbox" onChange={this.updateFruits} className="form-check-input" name="fruits" value="apple"/>
                    <label class="form-check-label">Apple</label>

                    <input type="checkbox" onChange={this.updateFruits} className="form-check-input" name="fruits" value="orange"/>
                    <label class="form-check-label">Orange</label>

                    <input type="checkbox" onChange={this.updateFruits} className="form-check-input" name="fruits" value="pineapple"/>
                    <label class="form-check-label" >Pineapple</label>

                    <input type="checkbox" onChange={this.updateFruits} className="form-check-input" name="fruits" value="durian"/>
                    <label class="form-check-label" >Durian</label>
                </div>

            </div>
        )
    }
}