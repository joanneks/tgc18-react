import React from 'react';
import AlertBox from './AlertBox';
import NumberBox from './NumberBox';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Our React App</h1>
        <NumberBox initialValue={10}/>
        <NumberBox initialValue={-5}/>
        <AlertBox message="Hello world"/>
      </div>
    );
  }
  
}

export default App;
