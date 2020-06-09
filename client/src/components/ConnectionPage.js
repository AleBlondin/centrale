import React from "react";
import { useHistory } from "react-router-dom";

const ConnectionPage = (props) => {
  const setUserId = props.setUserId;
  const inputUserId = React.createRef();
  const history = useHistory();

  const handleSubmit = (event) => {
    setUserId(inputUserId.current.value);
    event.preventDefault();
    return (
      history.push("/")
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rentrez votre identifiant utilisateur :
        <input type="text" ref={inputUserId} />
      </label><br></br>
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default ConnectionPage;
