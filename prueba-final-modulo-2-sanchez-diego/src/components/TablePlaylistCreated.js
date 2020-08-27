import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import cancion from "../baseDeDatos/songData.json";
import PlaylistInput from "./PlaylistInput";


export const TablePlaylistCreated = () => {

  const [listaFiltrada, setListaFiltrada] = useState([]);


  const filtrarCanciones = (cancion) => {
    console.log("Canción: ");
    console.log(cancion);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Se ejecuta el handleInputKeyPress");

      // primero me quedo con los resultyados filtrados
      const resultados = cancion.filter(filtrarCanciones);
      console.log("Tenemos el array con los resultados filtrados:");
      console.log(resultados);

      // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
      setListaFiltrada(resultados);
      console.log("Se actualiza el estado de las canciones a mostrar");
      console.log(resultados);
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table className="" aria-label="simple table">
        <TableHead>
          <TableCell>Tu Playlist</TableCell>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Artista</TableCell>
            <TableCell>Duracion</TableCell>
            <TableCell>Cant. Votos</TableCell>
            <TableCell>Votar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        listaFiltrada.map((resultados)=>(
          <TableRow key={resultados.uuid}>
            <TableCell>{resultados.name}</TableCell>
            <TableCell>{resultados.artist}</TableCell>
            <TableCell>{resultados.duration}</TableCell>
            <TableCell>
            <Fab size="small" color="default" aria-label="add">
                <AddIcon />
              </Fab>              
              <Fab size="small" color="default" aria-label="add">
                <AddIcon />
              </Fab>            
              </TableCell>
          </TableRow>
        ))
        }
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default TablePlaylistCreated;