import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import MovieList from "./components/MovieList";
import UserPage from "./components/UserPage";
import PokemonDisplayer from "./components/PokemonDisplayer";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/film">Page film</Link>
            </li>
            <li>
              <Link to="/liste_films">Liste des films</Link>
            </li>
            <li>
              <Link to="/user">USER</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/liste_films">
            <MovieList />
          </Route>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/film">
            <MoviePage />
          </Route>
          <Route path="/demo">
            <PokemonDisplayer/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
