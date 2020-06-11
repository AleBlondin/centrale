import React from "react";
import "./MoviePage.css";
import { useState, useEffect} from "react";










const MoviePage = (props) => {

  const user = props.user
  const [error, setError] = useState(null);
  const [score, setScore] = useState('');
  const [scoreUser, setScoreUser] = useState('');
  const [category, setCategory] = useState('');
  const [affiche, setAffiche] = useState('');
  const title = window.location.pathname.split("/").pop()
  const [triggerfetch, setTriggerfetch] = useState(false)
  


  useEffect(() => {
  const fetchScore = async () => {
    try {
      const response = await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/movie_avg/"+title);
      const responseJson = await response.json();
      setError(false);
      setScore(responseJson);
    } catch (error) {
      setError(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const response = await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/movie/"+title);
      const responseJson = await response.json();
      setError(false);
      setCategory(responseJson.genre);
    } catch (error) {
      setError(error);
    }
  };
  const fetchAffiche = async () => {
    try {
      const response = await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/movie/"+title);
      const responseJson = await response.json();
      setError(false);
      setAffiche(responseJson.affiche);
    } catch (error) {
      setError(error);
    }
  };
  const fetchUserScore = async () => {
    try {
      const response = await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/user/"+user);
      const responseJson = await response.json();
      setError(false);
      const K = Object.keys(responseJson);
      if (K.includes('score')) {
        const keys = Object.keys(responseJson["score"]);
        const T = decodeURI(title)
        if(keys.includes(T)){
            setScoreUser(responseJson['score'][T]+'/5');
          }}
      else {setScoreUser('Aucune note donnée');}
    } catch (error) {
      setError(error);
    }
  };
  fetchCategory();
  fetchScore();
  fetchAffiche();
  fetchUserScore();
  }, [title, user, triggerfetch]);

  const input = React.createRef();

    const updateScore = async (event) => {
      if (user!=='') {
        event.preventDefault();
        await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/movie_rate",{
        method:'post',
        body: JSON.stringify({
          "title" : title,
          "user" : user,
          "score" : input.current.value 
        })
        });
        setTriggerfetch(!triggerfetch)
        }
      
    }



    const displayScore = () => {

      if (error) {
        return "Erreur";
      } else {
        return score
      }
    };
    const displayScoreUser = () => {

      if (error) {
        return "Erreur";
      } else {
        return scoreUser
      }
    };


    

    return (
      <div className="MoviePage">
        <header className="MoviePage-header">
          <p className="MovieTitle">
            {decodeURI(title)}
          </p>
          <img className="MovieImage" src= {affiche} alt="affiche"/>
          <p className="MovieScore">
            Score du film : {displayScore()} 
            <form onSubmit={updateScore}>
              <label>
                Notez ce film : 
                <input type="text" ref={input} />
             </label>
              <input type="submit" value="Valider" />
            </form>
            Note donnée : {displayScoreUser()}

          </p>
          <p className="MovieCategory">
            Catégorie : {category}
          </p>
        </header>
      </div>
    );
  };
  
  export default MoviePage;
  