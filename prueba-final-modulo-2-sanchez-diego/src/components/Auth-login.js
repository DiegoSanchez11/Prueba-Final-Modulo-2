import React from 'react';
import {  } from '@material-ui/core';

// Components
import NavBar from '../components/NavBar';
import ContainerAuth from '../components/ContainerAuth';

// Css

export const AuthLogin = () => (){
    return(
        <div>
            <div>
                <NavBar />
                <ContainerAuth />
            </div>
        </div>
    )
}