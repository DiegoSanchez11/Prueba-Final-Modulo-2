import React, { useState } from "react";
import { TextField, Paper } from "@material-ui/core";
import { Router, Route, Link, Swutch, useHistory } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";

// Components
import Boton from "./Boton";
import Links from "./Links";
// Base de Datos de Usuarios
import users from "../baseDeDatos/userData.json";
// Css
import "../styles/Form.css";

const Form = () => {
  const history = useHistory();

  const [valorDelInput, setValorDelInput] = useState("");
  const [valorDelInputcontraseña, setValorDelInputcontraseña] = useState("");

  const mostrarTextoIngresado = (evento) => {
    setValorDelInput(evento.target.value);
  };
  const mostrarTextoIngresadocontraseña = (evento) => {
    setValorDelInputcontraseña(evento.target.value);
  };

  const chequeaUsuarios = (element) => {
    if (
      element.email === valorDelInput &&
      element.password === valorDelInputcontraseña
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validaUsuario = () => {
    const FilterUser = users.filter(chequeaUsuarios);
    console.log(FilterUser);
    if (FilterUser.length > 0) {
      history.replace("/Playlist");
    } else {
      history.replace("/authlogin");
    }
  };

  return (
    <div className="form__box">
      <Paper className="form__paper">
        <div className="main__title-container">
          <div>
            <div className="text__icon">
              <img className="img__candado" />
            </div>
          </div>
          <h1 className="main__title-text">Ingresar</h1>
        </div>
        <TextField
          className="form__input"
          variant="outlined"
          placeholder="Correo Electronico"
          onChange={mostrarTextoIngresado}
          value={valorDelInput}
        />
        <br />
        <TextField
          className="root form__input"
          variant="outlined"
          placeholder="Contraseña"
          type="password"
          onChange={mostrarTextoIngresadocontraseña}
          value={valorDelInputcontraseña}
        />
        <br />

        <Boton
          onClick={validaUsuario}
          button_variant="contained"
          button_color="secondary"
          button_name="COMENZAR A CREAR PLAYLIST"
        />

        <br />
        <Links
          href="#"
          color="inherit"
          content="¿Has ovlidado la contraseña?"
        />
        <br />
        <div className="line__links"></div>
        <br />
        <Links href="#" color="inherit" content="¿NO TIENES CUENTA?" />
        <Boton
          button_variant="outlined"
          button_color="default"
          button_name="REGISTRATE"
        />
      </Paper>
    </div>
  );
};

export default Form;
