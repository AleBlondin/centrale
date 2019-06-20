import React from 'react';
import logo from './logo.svg';
import popcorn from './popcorn.png'
import './movie.css';
import Header from './Header'

function Movie() {
  return (
    <div>
      <header >

        <Header/>

      </header>

    <p className='encadrement'>

        <h1 className='researched_movie'> Titre du film </h1>

        <p className='informations'> Synopsis: </p>
        <p className='informations'> Année de sortie: </p>
        <p className='informations'> Note moyenne: </p>
        <p className='informations'> Ta note : </p>
    </p>
    </div>


  );
}

export default Movie;
