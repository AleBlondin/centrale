import React from "react";
import "./UserPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const UserPage = (props) => {

  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [notSeen, setnotSeen] = useState([]);
  const [rec, setRec] = useState([])
  const user = props.user;



  useEffect(() => {
    const fetchMovieGrade = async () => {
      try {
        const response = await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/list_movie_grade/"+user);
        const responseJson = await response.json();
        setError(false);
        setItems(responseJson);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieGrade();

    const fetchMovieNotSeen = async () => {
      try {
        const response = await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/list_movie_no_grade/"+user);
        const responseJson = await response.json();
        setError(false);
        setnotSeen(responseJson);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieNotSeen();

    const fetchMovieRec = async () => {
      try {
        const response = await fetch(" https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/movie_genre_recommandation/"+user);
        const responseJson = await response.json();
        setError(false);
        setRec(responseJson);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieRec();
  }, [user]);
  
  const displayMoviesGrade = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map((item) => (
            <li className="UserMovieList">
              <Link className="UserMovieList" key={item} to = {"/movie/"+item}> {item}</Link> 
            </li>))}
          </ul>
        </div>
      );
    }
  };

  const displayMoviesNotSeen = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <ul>
            {notSeen.map((item) => (
            <li className="UserMovieList">
              <Link className="UserMovieList" key={item} to = {"/movie/"+item}> {item}</Link> 
            </li>))}
          </ul>
        </div>
      );
    }
  };

  const displayMoviesRec = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <ul>
            {rec.map((item) => (
              <li className="UserMovieList">
              <Link className="UserMovieList" key={item} to = {"/movie/"+item}> {item}</Link> 
              </li>))}
          </ul>
        </div>
      );
    }
  };


  if (user === '') {return (
  <div className="UserPage">
    <header className="UserPage-header">
      <p className="UserWelcome">
      Veuillez entrer un pseudo dans la page d'accueil.
      </p> 
    </header>
  </div>)
  }
  else{
  return (
    <div className="UserPage">
      <header className="UserPage-header">
        <p className="UserWelcome">
          Bienvenue, {user}.
        </p>
        <p className = "UserRec">
          Films recommandés :
          {displayMoviesRec()}
        </p>
        <div className="UserColonneGauche">
          Liste des films déja vus : 
          {displayMoviesGrade()}
        </div>
        <div className="UserColonneDroite">
            Films non vus :
            {displayMoviesNotSeen()}
        </div>
      </header>
    </div>
  );}
};
  
  export default UserPage