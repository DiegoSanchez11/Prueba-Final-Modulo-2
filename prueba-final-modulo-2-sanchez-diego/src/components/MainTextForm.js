import React from 'react';
import {  } from '@material-ui/core';

// Css
import '../styles/MainTextForm.css';

export const MainTextForm = () => {
    return(
        <div className="main__title-container">
            <div>
                <div className="text__icon"><img className="img__candado" /></div>
            </div>
            <h1 className="main__title-text">Ingresar</h1>
        </div>
    )    
}

export default MainTextForm;