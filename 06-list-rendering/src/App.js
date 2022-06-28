import React from 'react'
import Book from './Book'
export default class App extends React.Component {
  state = {
    fruits:["apples", "oranges", "pineapples", "durians"],
    superheroes:['Captain America', 'Iron Man', 'Spiderman', 'Dr. Strange'],
    movies:['The Lord of the Rings', 'Dune', 'The Matrix', 'Spiderman'],
    books:[
      {
        'title':'The Lord of the Rings',
        'author':'JRR Tolkien'
      },
      {
        'title':'Chronicle of Narina',
        'author':'CS Lewis'
      },
      {
        'title':'Twilight',
        'author':'Stephenie Meyer'
      },
      {
        'title':'Romance of the Three Kingdoms',
        'author':'Luo Guanzhong'
      }
    ],
    secretOfLife: 42
  }

  renderBooks() {
    let bookElements = [];
    for (let b of this.state.books) {
      bookElements.push(<Book key={b.title} title={b.title} author={b.author}/>)
    }
    return bookElements;
  }

  renderSuperHeroes() {
    let superheroElements = [];
    for(let s of this.state.superheroes) {
      superheroElements.push(<li key={s}>{s}</li>)
    }
    return superheroElements;
  }

  render() {

    let fruitElements = [];
    for (let f of this.state.fruits) {
      fruitElements.push(<li key={Math.floor(Math.random() * 1000000 + 1)}>{f}</li>)
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
          {this.state.movies.map(function(m, index){
            return <li key={index}>{m}</li>
          })}
        </ul>
        <h1>Books</h1>
        {this.renderBooks()}

      </React.Fragment>
    )
  }
}