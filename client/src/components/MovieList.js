import React from "react";
import "./MovieList.css";
import { useState, useEffect } from "react";


const MovieList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);

  const fetchExample = async () => {
    try {
      const response = await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/movie/list");
      const responseJson = await response.json();
      console.log(responseJson)
      setIsLoaded(true);
      setError(false);
      setItems(responseJson.results);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    setIsLoaded(false);
    fetchExample();
    // The useEffect hook will retrigger every time an element in the dependency array changes.
    // changes = strict egality, so beware when mutating objects
  }, [fetchAgain]);

  const displayMovies = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
        
      );
    }
  };


    return (
      <div className="MovieList">
        <header className="MovieList-header">
          <p className="MovieListTitle">
            Liste des films disponibles
          </p>
          <p className="MovieListList">
            <button onClick={triggerFetchAgain}>Actualiser la liste</button>
            {displayMovies()}
          </p>
        </header>
      </div>
    );
  };
  
  
    export default MovieList;
  