import React from "react";
import "./CreateMovie.css";







const CreateMovie = () => {

    const title = React.createRef(); 
    const affiche = React.createRef(); 
    const category = React.createRef(); 


    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/movie_create",{
            method:'post',
            body: JSON.stringify({
              "movie":title.current.value,
              "affiche":affiche.current.value,
              "genre":category.current.value
            })
            });
      };
    
    return (
        <div className="CreateMoviePage">
        <header className="CreateMoviePage-header">
            <p>
            Veuillez rentrer les données du film ici :
            </p>
            <form onSubmit = {handleSubmit} className="CreateMovieForm">
            <label for="name">Titre : <input type="text" ref={title} className="CreateMovieForm"/> 
            </label>
            <label for="name">Lien de l'affiche : <input type="text" ref={affiche} className="CreateMovieForm"/> 
            </label>
            <label for="name">Catégorie : <input type="text" ref={category} className="CreateMovieForm"/> 
            </label>
            <input type="submit" value="Valider" />
            </form>
        </header>
        </div>
    );
    };

export default CreateMovie;