import React from 'react';
import { Button, TextField, Typography, Link , Card } from '@material-ui/core';

// Css


class CardLogin extends React.Component{
    render(){
        return(
            <div className="cardLogin__box">
                <Card>
                    <TextField variant="outlined" value="Correo Electronico"/>
                    <TextField variant="outlined" value="Contraseña" />
                    <Button variant="contained" color="secundary">COMENZAR A CREAR PLAYLUST</Button>
                    <Typography>
                        <Link href="#" onClick="" color="inherit">
                            ¿Has ovlidado la contraseña?
                        </Link>
                        <Link href="#" onClick="" varitant="inherit">
                            ¿NO TIENES CUENTA?
                        </Link>
                    </Typography>
                </Card>
            </div>
            
        )
    }
}

export default CardLogin;