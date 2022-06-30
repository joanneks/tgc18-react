import React from 'react'
import DisplaySignupForm from './DisplaySignupForm'
import DisplaySignupSuccess from './DisplaySignupSuccess'

export default class SignupForm extends React.Component {
    state = {
        email: '',
        password: '',
        submitted: false
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
       
        if (this.state.submitted == false) {
            return <DisplaySignupForm 
                   email={this.state.email}
                   password={this.state.password}
                   updateFormField={this.updateFormField}
                   register={() => {
                    this.setState({
                        submitted: true
                    })
                }}
            />
        } else {
            return <DisplaySignupSuccess
                    email={this.state.email}
            />
        }
  
    }
}