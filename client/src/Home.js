import React from 'react';
import './Home.css'
import Titanic from './Titanic.jpg'
import MammaMia from './MammaMia.jpg'
import Header from './Header';


function Home() {
    return (
      <div className="App">
      <header className="App-header">


        <Header/>


      </header>

        <h1 className = "Rubrics">Recommandés pour vous</h1>

                <div class="Pictures">
                <MovieTitle title='Titanic' image={Titanic} url="https://www.youtube.com/watch?v=LD8dyWYuX0g&t=2s"/>
                <MovieTitle title='Mamma Mia!' image={MammaMia} url="https://www.youtube.com/watch?v=w3MOV3cYHqA"/>
                </div>

         <h1 className = "Rubrics">Les mieux notés</h1>


        <h1 className = "Rubrics">À l'affiche </h1>


        <h1 className= "Rubrics">Tous les films</h1>

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


