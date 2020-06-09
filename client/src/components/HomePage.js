import React from "react";
import logo from "./logo.svg";
import "./HomePage.css";



const HomePage = () => {

  const input = React.createRef();

  const handleSubmit = (event) => {
    alert("A name was submitted: " + input.current.value);
    event.preventDefault();
  };

  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <p>
          Veuillez rentrer votre pseudo ci-dessous.
        </p>
        <form onSubmit = {handleSubmit} className="HomePageForm">
          <label for="name">Pseudo : <input type="text" ref={input} /> (Enter pour valider)
          </label>
        </form>
      </header>
    </div>
  );
};

export default HomePage;
