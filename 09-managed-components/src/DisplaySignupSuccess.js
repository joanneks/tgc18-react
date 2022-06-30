import React from 'react'

export default function DisplaySignupSuccess(props) {
    return (
        <React.Fragment>
        Thank you for signing up. Please check your email at {props.email} for a verification link.
    </React.Fragment>
    )
}