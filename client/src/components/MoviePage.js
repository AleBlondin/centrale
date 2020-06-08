import React from "react";
import "./MoviePage.css";

const MoviePage = () => {
    return (
      <div className="MoviePage">
        <header className="MoviePage-header">
          <p>
            Titre du film
          </p>
          <p className="MovieScore"
          >
            Score du film /5
          </p>
        </header>
      </div>
    );
  };
  
  export default MoviePage;
  