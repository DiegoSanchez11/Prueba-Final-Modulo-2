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

import song from "../baseDeDatos/songData.json";
import PlaylistInput from "./PlaylistInput";


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
          <TableRow key={song.uuid}>
            <TableCell>{song.name}</TableCell>
            <TableCell>{song.artist}</TableCell>
            <TableCell>{song.album}</TableCell>
            <TableCell>{song.duration}</TableCell>
            <TableCell>
            <Fab size="small" color="default" aria-label="add">
                <AddIcon />
              </Fab>              
              <Fab size="small" color="default" aria-label="add">
                <AddIcon />
              </Fab>            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePlaylistCreated;