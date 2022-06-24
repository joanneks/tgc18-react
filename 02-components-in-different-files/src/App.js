import React from 'react';

function sayHello() {
  return "Hello"
}

function sayGoodbye() {
  // Under the hood JSX are just JavaScript objects 
  // therefore they can be assigned to variables;
  let g = <p>Goodbye World</p>;
  return g;
}

function foobar() {
  return <h3>Foobar!</h3>
}

// A component is 
// 1. a function
// 2. returns JSX
// 3. its first alphabet is uppercase
// 4. can be used in JSX as if it is a HTML element
// The first argument of a Component function
// is all its props in an object
function Alert(props) {
 // for Alert, the `message` props will be the error message to display
  return <div style={{
    'backgroundColor': props.bgColor
  }}>{props.message}</div>;
}

function PuppyImage() {
  return <img src={require('./puppy.jpg')}/>
}

function BorderedImage() {
  return (
    <img src={require('./ramen.jpg')} style={
      {
        "border":"4px solid red"
      }
    }/>
  ) 
}

function CustomizedImage(props) {
  return (
    <img src={require('./' + props.image)}/>
  )
}

function Addition(props) {
    return <p>{props.number1 + props.number2}</p>
}

// App is a component 
export default function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      {/* We can call a function between the {}. 
          The result of the function can be rendered out
      */}
      {sayHello()}
      {sayGoodbye()}
      {foobar()}
      {/* Create and render an instance of the Alert component */}
      <Alert bgColor="red" message="Collision detected"/>
      <Alert bgColor="yellow" message="Fuel low"/>
      <PuppyImage/>
      <BorderedImage/>
      <CustomizedImage image='skewers.jpg'/>
      <Addition number1={3} number2={Math.floor(Math.random()*100 + 1)}/>
    </React.Fragment>
  )
}

// alt. export default App; // CommonJS: module.exports = App;