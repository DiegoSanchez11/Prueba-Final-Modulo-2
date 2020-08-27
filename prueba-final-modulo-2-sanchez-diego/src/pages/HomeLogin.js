// Este sera mi Home-Login
import React from "react";
// Components
import Form from "../components/Form";
import NavBar from "../components/NavBar";

class HomeLogin extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Form />
      </div>
    );
  }
}

export default HomeLogin;
