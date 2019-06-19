import React from 'react';
import logo from './logo.svg';
import popcorn from './popcorn.png'
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="genres">

      <div className='beau'>

      <h1 className="title"> MyPopCorn
      </h1>
      <img src={popcorn} className="logo" alt="logo" />

      </div>


      <div className="genres2">
        <a
          className="Genre"
          href="https://www.netflix.com/browse/genre/6548?bc=34399"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comédie
        </a>

        <a
          className="Genre"
          href="https://www.netflix.com/browse/genre/8711?bc=34399"
          target="_blank"
          rel="noopener noreferrer"
        >
          Horreur
        </a>
        <a
          className="Genre"
          href="https://www.netflix.com/browse/genre/8711?bc=34399"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thriller
        </a>
        <a
          className="Genre"
          href="https://www.netflix.com/browse/genre/8711?bc=34399"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentaire
        </a>
        <a
          className="Genre"
          href="https://www.netflix.com/browse/genre/8711?bc=34399"
          target="_blank"
          rel="noopener noreferrer"
        >
          Action
        </a>

        <form >
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>

        </div>


      </header>
    </div>
  );
}

export default Header;
