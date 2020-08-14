import React from 'react';
import { TextField } from '@material-ui/core';

class Form extends React.Component{
    render(){
        return(
            <div>
                <TextField variant="outlined" placeholder="Correo Electronico"/>
                <TextField variant="outlined" placeholder="Contraseña" />
            </div>
        )
    }
}

export default Form;