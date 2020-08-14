import React from 'react';
import { Button, TextField, Typography, Link , Card } from '@material-ui/core';

// Css


class CardLogin extends React.Component{
    render(){
        return(
            <Card>
                <TextField id="outlined-basic" label="Outlined" variant="Correo Electronico"/>
                <TextField id="outlined-basic" label="Outlined" variant="Contraseña" />
                <Button variant="contained" color="secundary">COMENZAR A CREAR PLAYLUST</Button>
                <Typography>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        {'color="inherit"'}¿Has ovlidado la contraseña?
                    </Link>
                    <Link href="#" onClick={preventDefault} varitant="body2">
                        {'variant="body2"'}¿NO TIENES CUENTA?
                    </Link>
                </Typography>
                
            </Card>
        )
    }
}

export default CardLogin;