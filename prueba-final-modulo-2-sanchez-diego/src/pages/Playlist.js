// Esta sera la playlist
import React from 'react';
import {  } from '@material-ui/core';

// Components

import TablePlaylist from '../components/TablePlaylist';


export const Playlist = () => {
    return(
        <TablePlaylist title="Recomendado" primero="Nombre" segundo="Album" tercerp="Artista" cuarto="Duracion" />
    )
}

export default Playlist;