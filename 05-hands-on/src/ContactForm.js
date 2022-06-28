import React from 'react'

export default class ContactForm extends React.Component {
    // the state variables are the data that component has responsbility for
    // make sure that there are no derived values
    state = {
        firstName: '',
        lastName: '',
        enquiry:''
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

    render() {
        // 1. make su</div>re do not call setState in the render function
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
                        
            </div>)
    }
}