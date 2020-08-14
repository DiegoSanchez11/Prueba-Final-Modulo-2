import React from 'react';
import { Button, TextField, Typography, Link , Card } from '@material-ui/core';

// Css
import '../styles/CardLogin.css';

class CardLogin extends React.Component{
    render(){
        return(
            <div className="cardLogin__box">
                <TextField variant="outlined" value="Correo Electronico"/>
                <TextField variant="outlined" value="Contraseña" />
                <Button variant="contained" color="secondary">COMENZAR A CREAR PLAYLIST</Button>
                <Typography>
                    <Link href="#" onClick="" color="inherit">
                        ¿Has ovlidado la contraseña?
                    </Link>
                    <Link href="#" onClick="" varitant="inherit">
                        ¿NO TIENES CUENTA?
                    </Link>
                </Typography>
                <Button variant="outlined" color="default">REGISTRATE</Button>
            </div>
            
        )
    }
}

export default CardLogin;