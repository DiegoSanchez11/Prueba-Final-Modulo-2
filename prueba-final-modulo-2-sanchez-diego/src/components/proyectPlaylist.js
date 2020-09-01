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
  InputBase,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import cancion from "../baseDeDatos/songData.json";
import PlaylistInput from "./PlaylistInput";

// Function Add Song


//CSS
import "../styles/proyectPlaylist.css";




const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const PrpyectPlaylist = () => {
  const classes = useStyles();
  //Estados
  const [inputValue, setInputValue] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const handleInputChange = (e) => {
    console.log("Se ejecuta handleInputChange y actualiza el inputValue");
    setInputValue(e.target.value);
  };

  const filtrarCanciones = (cancion) => {
    console.log("Se ejecuta filtrarCanciones");
    console.log("Valor del input: ");
    console.log(inputValue);
    console.log("Canción: ");
    console.log(cancion);

    // Aca filtro las canciones que coinciden con la busqueda
    if (cancion.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
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
  };

  return (
    <div>
      <div align="center">
        <InputBase
          className="tableOne__input"
          onChange={handleInputChange}
          placeholder="Buscar"
          onKeyPress={handleInputKeyPress}
          value={inputValue}
        />
      </div>
      <div>
        <TableContainer className="tableOne__table" component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>Resultados</TableHead>

            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Album</TableCell>
                <TableCell align="center">Duracion</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody id="table-song">
              {
                // recorro la lista filtrada que tengo en el estado
                listaFiltrada.map((resultados) => (
                  <TableRow key={resultados.uuid}>
                    {/*Esta es la tabla que debe aparecer si se encuentra un archivo */}
                    <TableCell align="center">{resultados.name}</TableCell>
                    <TableCell align="center">
                      {resultados.artist.name}
                    </TableCell>
                    <TableCell align="center">{resultados.album}</TableCell>
                    <TableCell align="center">{resultados.duration}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <Fab size="small" color="secondary">
                        <AddIcon onClick=""/>
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PrpyectPlaylist;
