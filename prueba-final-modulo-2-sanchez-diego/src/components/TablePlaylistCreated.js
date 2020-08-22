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


export const TablePlaylistCreated = () => {
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
          <TableRow key={Songs.uuid}>
            <TableCell>{Songs.name}</TableCell>
            <TableCell>{Songs.artist}</TableCell>
            <TableCell>{Songs.album}</TableCell>
            <TableCell>{Songs.duration}</TableCell>
            <TableCell>
              <Button variant="contained" color="secondary" name="DisLike" />
              <Button variant="contained" color="primary" name="Like" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePlaylistCreated;