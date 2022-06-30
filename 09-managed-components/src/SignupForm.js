import React from 'react'

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
        return (
            <React.Fragment>
                {
                    this.state.submitted === false ?
                        <div style={{ margin: "10px" }}>
                            <div>
                                <label>Email:</label>
                                <input type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.updateFormField}
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.updateFormField}
                                />
                            </div>
                            <button onClick={() => {
                                this.setState({
                                    submitted: true
                                })
                            }}>Sign up</button>
                        </div>
            :
                <p>Thank you for registering!</p>
            
        
        }
            


            </React.Fragment>
        )
    }
}