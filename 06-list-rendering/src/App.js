import React from 'react'

export default class App extends React.Component {
  state = {
    fruits:["apples", "oranges", "pineapples", "durians"],
    superheroes:['Captain America', 'Iron Man', 'Spiderman', 'Dr. Strange'],
    movies:['The Lord of the Rings', 'Dune', 'The Matrix', 'Spiderman'],
    secretOfLife: 42
  }

  renderSuperHeroes() {
    let superheroElements = [];
    for(let s of this.state.superheroes) {
      superheroElements.push(<li>{s}</li>)
    }
    return superheroElements;
  }

  render() {

    let fruitElements = [];
    for (let f of this.state.fruits) {
      fruitElements.push(<li>{f}</li>)
    }
 

    return (
      <React.Fragment>
        <h1>Fruits</h1>
        <ul>
          {fruitElements}
        </ul>
        <h1>Superheroes</h1>
        <ol>
          {this.renderSuperHeroes()}
        </ol>
        <h1>Movies</h1>
        <ul>
          {this.state.movies.map(function(m){
            return <li>{m}</li>
          })}
        </ul>

      </React.Fragment>
    )
  }
}