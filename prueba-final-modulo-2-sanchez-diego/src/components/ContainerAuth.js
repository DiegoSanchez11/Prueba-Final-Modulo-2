import React from 'react';
import { Paper } from '@material-ui/core';

import imagen from '../Icons/image1.png';

// Css
import '../styles/ContainerAuth.css';

export const ContainerAuth = () => {
    return(
        <Paper className>
            <div>
                <div className="box__father">
                    <div>
                        <imagen />
                    </div>
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