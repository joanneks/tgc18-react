import React from 'react'
import axios from 'axios';
export default class ContactForm extends React.Component {
    // the state variables are the data that component has responsbility for
    // make sure that there are no derived values
    state = {
        firstName: '',
        lastName: '',
        enquiry: 'support',
        country: 'singapore',
        contacts: [],
        allCountries: [],
        allEnquiries: [],
        allContacts: [],
        loaded:false
    }

    async componentDidMount() {
        // loading in serial
        // let contactResponse = await axios.get('/contacts.json');
        // let enquiryResponse = await axios.get('/enquiry.json');
        // let countryResponse = await axios.get('/countries.json');
        // this.setState({
        //     'allCountries': countryResponse.data,
        //     'allEnquiries': enquiryResponse.data,
        //     'allContacts': contactResponse.data
        // })

        // loading in parallel
        let contactRequest = axios.get('/contacts.json');
        let enquiryRequest = axios.get('/enquiry.json');
        let countryRequest = axios.get('/countries.json');
        let [contactResponse, enquiryResponse, countryResponse]
            = await axios.all([contactRequest, enquiryRequest, countryRequest]);
        this.setState({
            'allCountries': countryResponse.data,
            'allEnquiries': enquiryResponse.data,
            'allContacts': contactResponse.data,
            'loaded': true
        })
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

        if (this.state.loaded) {
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
                    {
                        this.state.allEnquiries.map(e => (
                            <React.Fragment key={e.value}>
                                <input type="radio"
                                    name="enquiry"
                                    value={e.value}
                                    onChange={this.updateEnquiry}
                                    checked={this.state.enquiry === e.value}
                                />
                                <label>{e.display}</label>
                            </React.Fragment>
                        ))
                    }
                </div>
    
                <div>
                    <label>Country</label>
                    <select value={this.state.country} onChange={this.updateCountry}>
                        {
                            (() => {
                                let options = [];
                                for (let c of this.state.allCountries) {
                                    options.push(<option key={c.value} value={c.value}>{c.display}</option>)
                                }
                                return options;
                            })()
                        }
                    </select>
                </div>
    
                <div>
                    <label>How to contact you?</label>
                    {
                        this.state.allContacts.map(c => (
                            <React.Fragment key={c.value}>
                                <input type="checkbox" value={c.value} onChange={this.updateContacts} checked={this.state.contacts.includes(c.value)} />
                                <label>{c.display}</label>
                            </React.Fragment>
                        ))
                    }
    
    
    
                </div>
            </div>)
        } else {
            return <p>Please wait, loading...</p>
        }

      
      
    }
}