import React from 'react';
import { TextField } from '@material-ui/core';

class Form extends React.Component{
    render(){
        return(
            <div>
                <TextField variant="outlined" value="Correo Electronico"/>
                <TextField variant="outlined" value="Contraseña" />
            </div>
        )
    }
}

export default Form;