import React from 'react';
import logo from './logo.svg';
import popcorn from './popcorn.png'
import './Header.css';
import Home from './Home'
import superagent from 'superagent'

function Header(props) {


  return (
    <div className="App">
      <header className="genres">

      <div className='beau'>

      <h1 className="title"> MyPopCorn
      </h1>
      <img src={popcorn} className="logo" alt="logo" />

      </div>


      <div className="genres2">
        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Comédie'))}

        >
          Comédie
        </button>

        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Horreur'))}

        >
          Horreur
        </button>
        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Thriller'))}

        >
          Thriller
        </button>
        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Documentaire'))}

        >
          Documentaire
        </button>
        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Action'))}

        >
          Action
        </button>

            <input type="text" placeholder="Search.." name="search" value={props.research} onChange={(event) => props.setResearch(event.target.value)}/>

        </div>


      </header>
    </div>
  );
}

export default Header;
