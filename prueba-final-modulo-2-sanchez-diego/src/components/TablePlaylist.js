import React from "react";
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

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Songs from "../baseDeDatos/songData.json";

export const TablePlaylist = () => {
  return (
    <TableContainer component={Paper}>
      <Table className="" aria-label="simple table">
        <TableHead>
          <TableCell>Resultados</TableCell>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Artista</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Duracion</TableCell>
            <TableCell>Agregar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={Songs.uuid}>
            <TableCell>{Songs.name}</TableCell>
            <TableCell>{Songs.artist}</TableCell>
            <TableCell>{Songs.album}</TableCell>
            <TableCell>{Songs.duration}</TableCell>
            <TableCell>
              <Fab size="small" color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePlaylist;
