import React from 'react';
import { Button, TextField, Typography, Link , Card } from '@material-ui/core';

// Css


class CardLogin extends React.Component{
    render(){
        return(
            <Card>
                <TextField id="outlined-basic" label="Outlined" variant="Correo Electronico"/>
                <TextField id="outlined-basic" label="Outlined" variant="Contraseña" />
                <Typography>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        {'color="inherit"'}
                    </Link>
                    <Link href="#" onClick={preventDefault} varitant="body2">
                        {'variant="body2"'}
                    </Link>
                </Typography>
                <Button></Button>
            </Card>
        )
    }
}

export default CardLogin;