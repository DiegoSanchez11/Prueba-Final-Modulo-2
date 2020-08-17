import React from 'react';
import { TextField, Paper } from '@material-ui/core';
// Components
import Boton from './Boton';
import Links from './Links';

class Form extends React.Component{
    render(){
        return(
            <div>
                <Paper>
                    <TextField variant="outlined" placeholder="Correo Electronico"/>
                    <TextField variant="outlined" placeholder="Contraseña"/>
                    <Boton button_variant="contained" button_color="secondary" button_name="COMENZAR A CREAR PLAYLIST" />
                    <Links />
                    <Boton button_variant="outlined" button_color="default" button_name="REGISTRATE"/>
                </Paper>
            </div>
        )
    }
}

export default Form;