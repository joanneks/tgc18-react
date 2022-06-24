import React from 'react'; // eqv: const React = require('react')
import logo from './logo.svg';
import './style.css';

// creates a React component
// App.js is the entry point to all React application by default
function App() {
  const apples = require('./apples.jpg');
  console.log("apples=",apples);
  // a React component always must return JSX
  // only one parent is allowed (use React.Fragment for an invisible div)
  return (
    <React.Fragment>
      <h1 style={
        {
          color:"green",
          backgroundColor:"yellow"
        }
      }>Hello World</h1>
      <p>Let there be light!</p>
      <img src={logo}/>
      <img src={require('./apples.jpg')}/>
    </React.Fragment>
  )
}

// we must export out the component
export default App; // eqv: module.exports = App;