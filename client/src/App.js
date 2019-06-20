
import React, { Component }  from 'react';
import logo from './logo.svg';
import popcorn from './popcorn.png'
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import Header from './Header';
import Movie from './movie';
import Home from './Home';

function App() {
  return (
       <Router>
      <div className="App">
        <img src={popcorn} className="App-logo" alt="logo" />
      <AuthButton />
        <ul>
        <h2><Link to="/home">Ma page</Link></h2>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <hr />
      <p>Pas encore inscrit ?</p><Link to="/register">Inscrivez-vous !</Link>
        </ul>
      </div>
    </Router>
  );
}

function Mapage() {
    return <Link to={'/home'}>Ma page</Link>;
}

function Register() {
  return (
    <div>
      <h2>Inscrivez-vous !</h2>
    </div>
  );
}


function Protected() {
  return <Link to={'/page'}>Ma page</Link>;
}



const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Bienvenue !{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Déconnexion
        </button>
      </p>
    ) : (
      <p> </p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });

  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>Vous devez vous connecter pour accéder à votre page</p>
        <form action="">
        <div>Identifiant :
            <input type="text" name="userid"/></div>
        <div>Mot de passe :
            <input type="password" name="psw"/></div>
        </form>
        <button onClick={this.login}>Connexion</button>
      </div>
    );
  }
}



export default App;
