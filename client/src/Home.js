import React from 'react';
import './Home.css'
import Titanic from './Titanic.jpg'
import MammaMia from './MammaMia.jpg'
import Header from './Header';


import Movie from './movie'
import superagent from 'superagent'


function Home() {
const [movie, setMovie] = React.useState(null);
 React.useEffect(() => {
   superagent
     .get("http://localhost:5000/application/movies")
     .then(response => setMovie(response.body.movies));
 }, []);



    return (

    <div>
        <header >

            <Header/>

        </header>


        <h1 className = "Rubrics">Recommandés pour vous</h1>



         <h1 className = "Rubrics">Les mieux notés</h1>


        <h1 className = "Rubrics">À l'affiche </h1>


        <h1 className= "Rubrics">Tous les films</h1>
        <p className="list">  {movie && movie.map(movie => (<div> {movie.title} </div>))} </p>
        </div>
    )
}

const MovieTitle = (props) => (
    <div className="movie-title">
        <img src={props.image}></img>
        <a
        href={props.url}>
        <div>{props.title}</div></a>
    </div>
)

export default Home


