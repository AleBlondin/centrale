import React from 'react';
import logo from './logo.svg';
import popcorn from './popcorn.png'
import './movie.css';
import Header from './Header'
import superagent from 'superagent'

function Movie() {
const [research, setResearch] = React.useState("");
const [movie,setMovie] = React.useState(null);
const [DisplayedMovie, setDisplayedMovie] = React.useState(null);
 React.useEffect(() => {
   superagent
     .get("http://localhost:5000/application/movies")
     .then(response => {setDisplayedMovie(response.body.movies); setMovie(response.body.movies)})

 }, []);

  return (
    <div>
      <header >

        <Header research = {research} setResearch = {setResearch} movie={movie} setDisplayedMovie={setDisplayedMovie} />

      </header>

    <p className='encadrement'>

        <h1 className='researched_movie'> Titre du film </h1>
        <p className="list">  {DisplayedMovie && DisplayedMovie.map(movie => movie.title === research ? <div> {movie.title} </div> : undefined)} </p>

        <p className='informations'> Synopsis: </p>

        <p className='informations'> Année de sortie: </p>
         <p className="list">  {DisplayedMovie && DisplayedMovie.map(movie => movie.title === research ? <div> {movie.date} </div> : undefined)} </p>

        <p className='informations'> Note moyenne: </p>
        <p className="list">  {DisplayedMovie && DisplayedMovie.map(movie => movie.title === research ? <div> {movie.mark} </div> : undefined)} </p>

    </p>
    </div>


  );
}

export default Movie;
