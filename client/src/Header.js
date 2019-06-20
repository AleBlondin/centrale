import React from 'react';
import logo from './logo.svg';
import popcorn from './popcorn.png'
import './Header.css';
import Home from './Home'
import superagent from 'superagent'

function Header() {
const [movie, setMovie] = React.useState(null);
 React.useEffect(() => {
   superagent
     .get("http://localhost:5000/application/movies")
     .then(response => setMovie(response.body.movies));
 }, []);

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

          target="_blank"
          rel="noopener noreferrer"
          onClick={() => movie.filter(movie => movie.type = 'cartoon')}

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
