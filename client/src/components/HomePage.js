import React from "react";
import logo from "./logo.svg";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

const HomePage = (props) => {
  const history = useHistory()
  const input = React.createRef();  

  const handleSubmit = async (event) => {
    props.setselectedUser(input.current.value);
    history.push("/user");
    event.preventDefault();
    await fetch("https://t7hapfpdr9.execute-api.eu-west-1.amazonaws.com/dev/user_create",{
        method:'post',
        body: JSON.stringify({
          "user":input.current.value
        })
        });
  };


  
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <p>
          Veuillez rentrer votre pseudo ci-dessous.
        </p>
        <form onSubmit = {handleSubmit} className="HomePageForm">
          <label for="name">Pseudo : <input type="text" ref={input} /> 
          </label>
          <input type="submit" value="Valider" />
        </form>
      </header>
    </div>
  );
};

export default HomePage;