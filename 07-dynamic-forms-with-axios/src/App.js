import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import SurveyForm from './SurveyForm'
export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Survey</h1>
        <SurveyForm/>
      </div>
    </React.Fragment>
  )
}