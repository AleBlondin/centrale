import React from "react";
import "./MoviePage.css";


const MoviePage = () => {
    return (
      <div className="MoviePage">
        <header className="MoviePage-header">
          <p className="MovieTitle">
            Titre du film
          </p>
          <img className="MoveImage" src="https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg" alt="affiche"/>
          <p className="MovieScore">
            Score du film /5
          </p>
          <p className="MovieCategory">
            Catégorie : blablabla
          </p>
        </header>

      </div>
    );
  };
  
  export default MoviePage;
  