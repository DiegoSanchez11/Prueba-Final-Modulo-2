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

import Songs from '../baseDeDatos/songData.json';


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
          <TableRow key={songs.uuid}>
            <TableCell>{songs.name}</TableCell>
            <TableCell>{songs.artist}</TableCell>
            <TableCell>{songs.album}</TableCell>
            <TableCell>{songs.duration}</TableCell>
            <TableCell>
              <Button variant="contained" color="secondary" value="Add" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePlaylist;