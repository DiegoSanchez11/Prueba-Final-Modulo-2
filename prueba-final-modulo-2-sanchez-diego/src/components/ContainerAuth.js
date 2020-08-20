import React from 'react';
import { Paper } from '@material-ui/core';

// Css
import '../styles/ContainerAuth.css';

export const ContainerAuth = () => {
    return(
        <Paper>
            <div>
                <div className="box__father">
                    <div className="auth__container-box"></div>
                    <div>
                        <h3>Mmm... algo no salió bien</h3>
                        <p>Debes estar autenticado para acceder a esta página</p>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default ContainerAuth;