import React from 'react'

export default class ContactForm extends React.Component {
    // the state variables are the data that component has responsbility for
    // make sure that there are no derived values
    state = {
        firstName: '',
        lastName: '',
        enquiry:'',
        country:'singapore',
        contacts:[]
    }

    // make sure event handlers (i.e functions that are called in response to an event happening)
    // are arrow functions
    updateFirstName = (event) => {
        // the first argument is the event object. It represents the event that has happened
        // event.target => element that the event happens on
        // event.target.value => the content of the element
        this.setState({
            firstName: event.target.value,  // set the firstName state property to be whatever is inside the textbox
        })
    }

    updateLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    updateEnquiry = (event) => {
        this.setState({
            enquiry: event.target.value
        })
    }

    updateCountry = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    updateContacts = (event) => {
        // is the checkbox that is being clicked on already checked or unchecked?
        if (this.state.contacts.includes(event.target.value)) {
            // the user is unchecking the checkbox
            let indexToRemove = this.state.contacts.indexOf(event.target.value);

            // 1. clone the array
            let cloned = this.state.contacts.slice();
            // 2. modify the cloned array (removing the element at indexToRemove)
            cloned.splice(indexToRemove, 1);
            // 3. replace the original array in the state with the cloned
            this.setState({
                'contacts': cloned
            })


        } else {
            // the user is checking the checkbox
            // 1. clone the array
            let cloned = this.state.contacts.slice();
            // 2. modify the cloned array
            cloned.push(event.target.value);
            // 3. replace the cloned array into the state
            this.setState({
                'contacts': cloned
            })
        }
    }

    render() {
        // 1. make sure do not call setState in the render function
        // under any circumistances
        // 2. derived values should go into render
        return (<div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" 
                               value={this.state.firstName}
                               onChange={this.updateFirstName}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text"
                               value={this.state.lastName}
                               onChange={this.updateLastName}
                            
                        />
                    </div>
                    <div>
                        <label>Type of enquiry</label>

                        <input type="radio"
                               name="enquiry"
                               value="support"
                               onChange={this.updateEnquiry}
                               checked={this.state.enquiry === "support"}
                               />
                        <label>Support</label>

                        <input type="radio"
                               name="enquiry"
                               value="sales"
                               onChange={this.updateEnquiry}
                               checked={this.state.enquiry==='sales'}
                               />
                        <label>Sales</label>

                        <input type="radio"
                               name="enquiry"
                               value="marketing"
                               onChange={this.updateEnquiry}
                               checked={this.state.enquiry==='marketing'}
                               />
                        <label>Marketing</label>
                    </div>

                    <div>
                        <select value={this.state.country} onChange={this.updateCountry}>
                            <option value="singapore">Singapore</option>
                            <option value="thailand">Thailand</option>
                            <option value="laos">Laos</option>
                            <option value="cambodia">Cambodia</option>
                        </select>
                    </div>
                        
                    <div>
                        <input type="checkbox" value="email" onChange={this.updateContacts} checked={this.state.contacts.includes('email')}/>
                        <label>Email</label>

                        <input type="checkbox" value="phone" onChange={this.updateContacts} checked={this.state.contacts.includes('phone')}/>
                        <label>Phone</label>

                        <input type="checkbox" value="slow-mail" onChange={this.updateContacts} checked={this.state.contacts.includes('slow-mail')}/>
                        <label>Slow mail</label>
                    </div>
            </div>)
    }
}