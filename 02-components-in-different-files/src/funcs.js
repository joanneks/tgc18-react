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

  export { sayHello, sayGoodbye, foobar};
  