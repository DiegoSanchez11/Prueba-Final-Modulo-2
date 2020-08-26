import React from "react";
import { TextField, Paper } from "@material-ui/core";
import { Router , Route ,Link ,Swutch ,NavLink } from 'react-router-dom';


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';



// Components
import Boton from "./Boton";
import Links from "./Links";

import Playlist from '../pages/Playlist';

import users from '../baseDeDatos/userData.json';
// Css
import "../styles/Form.css";

const  goToPage = () => {
  return(
    <Link to="/Playlist">
      ("../pages/Playlist.js");
    </Link>
  )
}

// Colocar el code para la verificacion de usuarios

// const verificarUsuarios = usuariosFiltrados;

// hasta aca el code de verificacion de usuario

// Colocar el code para el boton

class Form extends React.Component {
  render() {
    return (
      <div className="form__box">
        <Paper className="form__paper">
          <TextField className="form__input" variant="outlined" placeholder="Correo Electronico" />
          <br />
          <TextField className="form__input" variant="outlined" placeholder="Contraseña" />
          <br />
          <Boton
            button_variant="contained"
            button_color="secondary"
            button_name="COMENZAR A CREAR PLAYLIST"
            href="/Playlist"
          />
          <Links />
          <Boton
            button_variant="outlined"
            button_color="default"
            button_name="REGISTRATE"
          />
        </Paper>
      </div>
    );
  }
}

export default Form;
