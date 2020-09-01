import React from "react";
import {} from "@material-ui/core";

// Components
import NavBar from "../components/NavBar";
import ContainerAuth from "../components/ContainerAuth";

// Css
import "../styles/AuthLogin.css";

export const AuthLogin = () => {
  return (
    <div>
      <NavBar />
      <div className="Auth__box">
        <ContainerAuth />
      </div>
    </div>
  );
};

export default AuthLogin;
