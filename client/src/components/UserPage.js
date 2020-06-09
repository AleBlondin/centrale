import React from "react";
import "./UserPage.css";


const UserPage = () => {
    const input = React.createRef();
    return (
      <div className="UserPage">
        <header className="UserPage-header">
          <p className="UserWelcome">
            Bienvenue, {input.current.value}
          </p>
        </header>
      </div>
    );
  };
  
  export default UserPage