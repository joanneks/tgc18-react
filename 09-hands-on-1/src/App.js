import React from "react";
import AskForNumber from "./AskForNumber";

export default class App extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    total: 0
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNumber = () => {
    this.setState({
      total: parseFloat(this.state.number1) + parseFloat(this.state.number2)
    });
  };

  render() {
    return (
      <div className="App">
        <AskForNumber
          number1={this.state.number1}
          number2={this.state.number2}
          updateField={this.updateFormField}
          add={this.addNumber}
        />
      </div>
    );
  }
}
