import React from 'react';
import { Typography, Link  } from '@material-ui/core';


class Links extends React.Component{
    render(){
        return(
            <div>
                <Typography>
                    <Link href="#" onClick="" color="inherit">
                        ¿Has ovlidado la contraseña?
                    </Link>
                    <Link href="#" onClick="" varitant="inherit">
                        ¿NO TIENES CUENTA?
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Links;