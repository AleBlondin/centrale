import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import MovieList from "./components/MovieList";
import UserPage from "./components/UserPage";
import "./App.css";
import { useState}from "react";

function App() {
  const [selecteduser, setselectedUser] = useState('')

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="Color">
              <Link to="/" className="Color">Accueil</Link>
            </li>
            <li className="Color">
              <Link to="/movies" className="Color">Liste des films</Link>
            </li>
            <li className="Color">
              <Link to="/user" className="Color">Profil</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/user">
            <UserPage  user={selecteduser}/>
          </Route>
          <Route path="/movie">
            <MoviePage user={selecteduser}/>
          </Route>
          <Route path="/">
            <HomePage setselectedUser={setselectedUser}/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
